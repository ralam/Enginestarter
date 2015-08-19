Enginestarter.Views.ProjectRewardList = Backbone.CompositeView.extend({
  template: JST['projects/rewards'],
  className: 'container-fluid',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    this.$el.html(this.template({ project: this.model }));
    this.renderRewards();
    return this;
  },

  addReward: function (reward) {
    var view = new Enginestarter.Views.RewardShow({
      model: reward,
      daysLeft: this.daysLeft,
      active: true
    });
    this.addSubview('.rewards-list', view);
  },

  renderRewards: function () {
    this.model.rewards().models.sort(
      function(a, b) {return a.attributes.level - b.attributes.level}
    );
    this.model.rewards().each(this.addReward.bind(this));
  },
})
