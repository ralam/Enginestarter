Enginestarter.Views.Index = Backbone.View.extend({
  template: JST['index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
    this.activeProject = [];
    this.lastProjects = [];
  },

  render: function () {
    this.fetchCarouselProjects();


    this.$el.html(this.template({
      activeProject: this.activeProject,
      lastProjects: this.lastProjects
    }));

    return this;
  },

  fetchCarouselProjects: function () {
    if (this.collection) {
      this.activeProject = this.collection.where({id: 35});
      this.lastProjects = []
      this.lastProjects.push(this.collection.where({id: 36}));
      this.lastProjects.push(this.collection.where({id: 37}));
      this.lastProjects.push(this.collection.where({id: 38}));
    }
  }

});
