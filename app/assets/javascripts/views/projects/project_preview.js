Enginestarter.Views.ProjectPreview = Backbone.View.extend({
  template: JST['projects/preview'],

  tagName: 'project-preview',


  render: function () {
    debugger;
    this.$el.html(this.template({ project: this.model }));

    return this;
  }
});
