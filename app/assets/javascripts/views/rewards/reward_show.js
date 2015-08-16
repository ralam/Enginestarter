Enginestarter.Views.RewardShow = Backbone.View.extend({
  template: JST['rewards/show'],

  className: 'row',

  initialize: function (options) {
    this.parent = options.parent
    // this.listenTo(this.model.rewardings(), 'change', this.parent.render);
  },

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
        // Backbone.history.loadUrl(); //causes view to not work
        // Backbone.history.navigate('projects/' + projectId, { trigger: true})
        this.parent.render()
      }.bind(this)
    });
  }
});
