Enginestarter.Views.ProjectShow = Backbone.View.extend({
  template: JST['projects/show'],

  className: '.container-fluid',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    var date = this.model.attributes.formatted_date
    var endDate = new Date(date);
    var daysLeft = Math.floor((endDate - Date.now()) / 86400000) + 1;
    this.$el.html(this.template({ project: this.model, days: daysLeft }));

    return this;
  },
})
