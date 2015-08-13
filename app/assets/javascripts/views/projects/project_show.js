Enginestarter.Views.ProjectShow = Backbone.CompositeView.extend({
  template: JST['projects/show'],

  className: '.container-fluid',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  addReward: function (reward) {
    var view = new Enginestarter.Views.RewardShow({
      model: reward
    });
    this.addSubview('#rewards', view);
  },

  render: function () {
    var date = this.model.attributes.formatted_date
    var endDate = new Date(date);
    var daysLeft = Math.floor((endDate - Date.now()) / 86400000) + 1;
    var that = this;


    this.$el.html(this.template({ project: this.model, days: daysLeft }));

    this.model.rewards().each(this.addReward.bind(this));
    return this;
  }
})
