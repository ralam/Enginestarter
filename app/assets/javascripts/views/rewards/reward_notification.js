Enginestarter.Views.RewardNotification = Backbone.View.extend({
  template: JST['rewards/modal'],

  initialize: function (options) {
    this.notification = options.notification;
  },

  events: {
    'click .m-background': 'remove',
    'click .close': 'remove'
  },

  render: function () {
    this.$el.html(this.template({ notification: this.notification }));

    return this;
  }
})
