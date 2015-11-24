Enginestarter.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],
  className: 'container-fluid',

  initialize: function () {
    this.listenTo(this.model, 'sync error', this.render);
  },

  render: function () {
    this.$el.html(this.template({
      user: this.model
    }));
    this.renderProjects();

    return this;
  },

  addProjectPreview: function (project) {
    var view = new Enginestarter.Views.ProjectPreview({
      model: project
    });
    this.addSubview('.projects', view);
  },

  renderProjects: function () {
    var project_ids = this.model.attributes.project_ids;
    var projects = [];
    var owned_projects = [];

    if (project_ids && this.collection) {
      project_ids.forEach(function (id) {
        projects.push(this.collection.getOrFetch(id));
      }.bind(this));
    }

    if (this.collection) {
      owned_projects = this.collection.getOrFetchByOwner(this.model.id);
    }

    if (projects.length > 0 && projects[0].attributes != undefined ) {
      projects.forEach(this.addProjectPreview.bind(this));
    }
  }
})
