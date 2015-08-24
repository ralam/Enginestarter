Enginestarter.Views.Index = Backbone.CompositeView.extend({
  template: JST['index'],

  initialize: function (options) {
    this.categories = options.categories;
    this.lastProjects = [];
    this.listenTo(this.collection, 'sync', this.render)
    this.listenTo(this.categories, 'sync', this.render)
  },

  render: function () {
    this.fetchCarouselProjects();
    this.$el.html(this.template({
      lastProjects: this.lastProjects
    }));

    if (this.categories.models.length > 0) {
      this.categories.models.forEach(this.addCategory.bind(this));
    }

    return this;
  },

  addCategory: function (category) {
    var view = new Enginestarter.Views.CategoryShow({
      model: category
    });
    this.addSubview('#categories', view);
  },

  fetchCarouselProjects: function () {
    if (this.collection) {
      this.lastProjects = []
      this.lastProjects.push(this.collection.where({id: 7}));
      this.lastProjects.push(this.collection.where({id: 2}));
      this.lastProjects.push(this.collection.where({id: 3}));
    }
  }

});
