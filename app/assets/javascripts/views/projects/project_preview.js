Enginestarter.Views.ProjectPreview = Backbone.View.extend({
  template: JST['projects/preview'],
  className: 'project-preview title',


  render: function () {
    this.$el.html(this.template({ project: this.model }));

    return this;
  }
});
