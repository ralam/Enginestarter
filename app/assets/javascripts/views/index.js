Enginestarter.Views.Index = Backbone.View.extend({
  template: JST['index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
  },

  render: function () {
    var activeProject = [];
    var lastProjects = [];
    if (this.collection) {
      activeProject = this.collection.first();
      lastProjects = this.collection.last(3);
    }
    // debugger;
    this.$el.html(this.template({
      activeProject: activeProject,
      lastProjects: lastProjects
    }));

    return this;
  }
});
