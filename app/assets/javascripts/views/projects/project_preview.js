Enginestarter.Views.ProjectPreview = Backbone.View.extend({
  template: JST['projects/preview'],
  className: 'project-preview title',

  render: function () {
    var date = this.model.attributes.formatted_date
    var endDate = new Date(date);
    this.daysLeft = Math.floor((endDate - Date.now()) / 86400000) + 1;

    if (this.daysLeft < 0) {
      this.remove();
      return;
    }

    this.$el.html(this.template({
      project: this.model,
      days: this.daysLeft
    }));

    return this;
  }
});
