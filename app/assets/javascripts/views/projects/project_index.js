Enginestarter.Views.ProjectIndex = Backbone.CompositeView.extend({
  template: JST['projects/index'],

  initialize: function (options) {
    this.categories = options.categories;
    this.category = options.category;
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.categories, 'sync', this.render);
    this.listenTo(this.category, 'sync', this.render);
  },

  events: {
    'change .categories': 'switchCategory'
  },

  render: function () {
    this.$el.html(this.template({
      categories: this.categories,
      category: this.category
    }));

    var projects = this.getProjects()

    if (projects.length > 0 ) {
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

  getProjects: function () {
    if (this.category) {
      return this.collection.where({category_id: parseInt(this.category.id)})
    } else {
      return this.collection.models;
    }
  },

  switchCategory: function (event) {
    event.preventDefault();
    var id = $(event.currentTarget).val();
    Backbone.history.navigate('/projects/category/' + id, { trigger: true })
  }
})
