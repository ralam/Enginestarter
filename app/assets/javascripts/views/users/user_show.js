Enginestarter.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],
  className: 'container-fluid',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({
      user: this.model,
      projects: this.model.attributes.supported_projects
    }));



    // if (supported_projects && supported_projects.length > 0) {
    //   supported_projects.forEach( function (project) {
    //     projectItem = Enginestarter.Models.Project({project})
    //     this.addProjectPreview(projectItem).bind(this)
    //   }.bind(this));
    // }

    return this;
  },

  addProjectPreview: function (project) {
    var view = new Enginestarter.Views.ProjectPreview({
      model: project
    });
    this.addSubview('.projects', view);
  },
})
