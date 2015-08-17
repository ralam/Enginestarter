Enginestarter.Views.RewardShow = Backbone.View.extend({
  template: JST['rewards/show'],

  className: 'row',

  events: {
    "click .reward-box": 'supportProject',
  },

  render: function () {
    this.$el.html(this.template({ reward: this.model }));

    return this;
  },

  renderNotification: function () {
    modal = new Enginestarter.Views.RewardNotification();
    $('body').append(modal.$el);
    modal.render();
  },

  supportProject: function (event) {
    this.model.rewarding().save({reward_id: this.model.id }, {
      success: function (model, response, options) {
        var projectId = this.model.attributes.project_id
        this.model._rewarding = undefined;
        Backbone.history.navigate('someDeadRoute');
        Backbone.history.navigate('projects/' + projectId , {trigger: true});
        this.renderNotification();
      }.bind(this),
      error: function (errors, errorText) {
        console.log(errorText)
      }
    });
  }
});
