Enginestarter.Views.RewardShow = Backbone.View.extend({
  template: JST['rewards/show'],

  initialize: function (options) {
    this.daysLeft = options.daysLeft
    this.active = options.active
  },

  events: {
    'click .reward-box': 'supportProject',
  },

  render: function () {
    this.$el.html(this.template({ reward: this.model }));
    if (this.daysLeft < 0 || !this.active) {
      this.undelegateEvents();
    };
    return this;
  },

  renderNotification: function (successNote) {
    modal = new Enginestarter.Views.Notification({
      notification: successNote
    });
    $('body').append(modal.$el);
    modal.render();
  },

  supportProject: function (event) {
    this.model.rewarding().save({reward_id: this.model.id }, {
      success: function (model, response, options) {
        var projectId = this.model.attributes.project_id
        this.model._rewarding = undefined;
        Backbone.history.navigate('dummyRoute');
        Backbone.history.navigate('projects/' + projectId , {trigger: true});
        this.renderNotification(response);
      }.bind(this),
      error: function (errors, errorText) {
        this.renderNotification(errorText);
      }.bind(this)
    });
  }
});
