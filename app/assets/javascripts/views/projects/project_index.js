Enginestarter.Views.ProjectIndex = Backbone.CompositeView.extend({
  template: JST['projects/index'],

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews()
    return this;
  },

  addProjectPreview: function (project) {
    var view = new Enginestarter.Views.ProjectPreview({
      model: project
    });
    this.addSubview('#projects', view);
  }
})
