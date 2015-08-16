Enginestarter.Views.ProjectIndex = Backbone.CompositeView.extend({
  template: JST['projects/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
  },

  addProjectPreview: function (project) {
    var view = new Enginestarter.Views.ProjectPreview({
      model: project
    });
    this.addSubview('#projects', view);
  },

  render: function () {
    this.$el.html(this.template());
    if (this.collection.models.length > 0) {
      this.collection.models.forEach(this.addProjectPreview.bind(this));
    }
    return this;
  }
})
