Enginestarter.Views.ProjectPreview = Backbone.Views.extend({
  template: JST['projects/preview'],

  tagName: 'container project-preview',

  render: function () {
    this.$el.html(this.template({ project: this.model }));

    return this;
  }
});
