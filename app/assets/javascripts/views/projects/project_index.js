Enginestarter.Views.ProjectIndex = Backbone.CompositeView.extend({
  template: JST['projects/index'],

  initialize: function (options) {
    this.categories = options.categories;
    this.category = options.category;
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.categories, 'sync', this.render);
    this.listenTo(this.category, 'sync', this.render);
  },

  addProjectPreview: function (project) {
    var view = new Enginestarter.Views.ProjectPreview({
      model: project
    });
    this.addSubview('#projects', view);
  },

  render: function () {
    this.$el.html(this.template({
      categories: this.categories,
      category: this.category
    }));
    if (this.category) {
      var projects = this.collection.where({category_id: parseInt(this.category.id)})
    } else {
      var projects = this.collection.models;
    }

    if (projects.length > 0 ) {
      projects.forEach(this.addProjectPreview.bind(this));
    }
    return this;
  }
})
