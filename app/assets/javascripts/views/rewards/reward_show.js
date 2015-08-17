Enginestarter.Views.RewardShow = Backbone.View.extend({
  template: JST['rewards/show'],
  highlightTemplate: JST['reward/highlight'],

  events: {
    'click .reward-box': 'supportProject',
    'mouseenter .reward-box': 'highlightReward',
    'mouseleave .reward-box': 'unhighlightReward'
  },

  render: function () {
    this.$el.html(this.template({ reward: this.model }));

    return this;
  },

  renderNotification: function (successNote) {
    modal = new Enginestarter.Views.Notification({
      notification: successNote
    });
    $('body').append(modal.$el);
    modal.render();
  },

  highlightReward: function (event) {
    debugger;
  },

  unhighlightReward: function (event) {

  }

  supportProject: function (event) {
    this.model.rewarding().save({reward_id: this.model.id }, {
      success: function (model, response, options) {
        var projectId = this.model.attributes.project_id
        this.model._rewarding = undefined;
        Backbone.history.navigate('someDeadRoute');
        Backbone.history.navigate('projects/' + projectId , {trigger: true});
        this.renderNotification(response);
      }.bind(this),
      error: function (errors, errorText) {
        this.renderNotification(errorText);
      }.bind(this)
    });
  }
});
