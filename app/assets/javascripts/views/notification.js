Enginestarter.Views.Notification = Backbone.View.extend({
  template: JST['notifications/modal'],
  // className: 'm-container',

  initialize: function (options) {
    this.notification = options.notification;
  },

  events: {
    'click .m-background': 'remove',
    'click .close': 'remove'
  },

  render: function () {
    this.$el.html(this.template({ notification: this.notification }));
    $('html,body').scrollTop(0);
    return this;
  }
})
