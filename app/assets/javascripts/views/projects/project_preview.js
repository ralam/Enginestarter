Enginestarter.Views.ProjectPreview = Backbone.View.extend({
  template: JST['projects/preview'],
  className: 'project-preview title',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var date = this.model.attributes.formatted_date
    var endDate = new Date(date);
    this.daysLeft = Math.floor((endDate - Date.now()) / 86400000) + 1;
    this.$el.html(this.template({
      project: this.model,
      days: this.daysLeft,
    }));

    return this;
  }
});
