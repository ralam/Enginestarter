Enginestarter.Views.ProjectShow = Backbone.View.extend({
  template: JST['projects/show'],

  className: '.container-fluid',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    var dbDate = this.model.attributes.end_date
    var endDate = new Date(dbDate);
    var futureDate = new Date();
    var daysLeft = futureDate.setTime(endDate - (new Date()));
    console.log(dbDate);
    console.log(endDate);
    this.$el.html(this.template({ project: this.model, days: daysLeft }));

    return this;
  },

  parseDate: function (str) {
    var mdy = str.split('/')
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
  },

 daydiff: function (first, second) {
    return (second-first)/(1000*60*60*24);
  }
})
