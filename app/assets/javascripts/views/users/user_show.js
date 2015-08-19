Enginestarter.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],
  className: 'container-fluid',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ user: this.model }));

    var projects = []

    if (this.model.attributes.project_ids) {
      this.model.attributes.project_ids.forEach(function (id){
        projects.push(this.collection.where({ id: id }));
      }.bind(this));
    }

    return this;
  },

  addProjectPreview: function (project) {
    var view = new Enginestarter.Views.ProjectPreview({
      model: project
    });
    this.addSubview('#projects', view);
  },
})
