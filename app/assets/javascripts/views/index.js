Enginestarter.Views.Index = Backbone.View.extend({
  template: JST['index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
  },

  render: function () {
    var activeProject = [];
    var lastProjects = [];
    if (this.collection) {
      activeProject = this.collection.where({id: 35});
      lastProjects = []
      lastProjects.push(this.collection.where({id: 36}));
      lastProjects.push(this.collection.where({id: 37}));
      lastProjects.push(this.collection.where({id: 38}));
    }

    this.$el.html(this.template({
      activeProject: activeProject,
      lastProjects: lastProjects
    }));

    return this;
  }
});
