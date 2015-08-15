Enginestarter.Views.ProjectPreview = Backbone.View.extend({
  template: JST['projects/preview'],

  className: 'container project-preview col-sm-3 title',

  render: function () {
    this.$el.html(this.template({ project: this.model }));

    return this;
  }
});
