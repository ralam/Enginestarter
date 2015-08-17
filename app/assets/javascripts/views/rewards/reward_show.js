Enginestarter.Views.RewardShow = Backbone.View.extend({
  template: JST['rewards/show'],

  className: 'row',

  events: {
    "click .reward-box": 'supportProject'
  },

  render: function () {
    this.$el.html(this.template({ reward: this.model }));

    return this;
  },

  supportProject: function (event) {
    this.model.rewardings().save({reward_id: this.model.id }, {
      success: function () {
        var projectId = this.model.attributes.project_id
        this.model._rewardings = undefined;
        Backbone.history.navigate('someDeadRoute');
        Backbone.history.navigate('projects/' + projectId , {trigger: true});
        this.render();
      }.bind(this),
      error: function (errors, errorText) {
        console.log(errorText)
      }
    });
  }
});
