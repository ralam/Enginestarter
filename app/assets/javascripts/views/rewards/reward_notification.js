Enginestarter.Views.RewardNotification = Backbone.View.extend({
  template: JST['rewards/modal'],

  events: {
    'click .m-background': 'remove',
    'click .close': 'remove'
  },

  render: function () {
    this.$el.html(this.template());

    return this;
  }
})
