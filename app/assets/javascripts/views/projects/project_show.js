Enginestarter.Views.ProjectShow = Backbone.CompositeView.extend({
  template: JST['projects/show'],

  className: '.container-fluid',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
    // this.listenTo(this.model.rewards().each(function(reward) {reward.rewardings()}), 'sync change add', this.render)
    //figure out how to listen to subview's associations
  },

  render: function () {
    var date = this.model.attributes.formatted_date
    var endDate = new Date(date);
    var daysLeft = Math.floor((endDate - Date.now()) / 86400000) + 1;
    this.$el.html(this.template({
      project: this.model,
      days: daysLeft,
      current_user: Enginestarter.CURRENT_USER
    }));
    this.renderRewards();
    return this;
  },

  addReward: function (reward) {
    var view = new Enginestarter.Views.RewardShow({
      model: reward,
      parent: this
    });
    this.addSubview('#rewards', view);
  },

  renderRewards: function () {
    this.model.rewards().models.sort(
      function(a, b) {return a.attributes.level - b.attributes.level}
    );
    this.model.rewards().each(this.addReward.bind(this));
  },
})
