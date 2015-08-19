Enginestarter.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],
  className: 'container-fluid',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.render)
  },

  render: function () {
    this.$el.html(this.template({
      user: this.model
    }));

    var project_ids = this.model.attributes.project_ids;
    var projects = [];

    if (project_ids) {
      project_ids.forEach(function (id) {
        projects.push(this.collection.getOrFetch(id));
      }.bind(this));
    }

    if (projects.length > 0) {
      projects.forEach(this.addProjectPreview.bind(this));
    }

    return this;
  },

  addProjectPreview: function (project) {
    var view = new Enginestarter.Views.ProjectPreview({
      model: project
    });
    this.addSubview('.projects', view);
  },
})
