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
    this.model.rewarding().save({reward_id: this.model.id });
  },
});
