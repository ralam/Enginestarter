Enginestarter.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.projects;
    this.categories = options.categories;
    this.users = options.users
  },

  routes: {
    'index': 'categoryIndex',
    'projects': 'projectIndex',
    'projects/category/:id': 'showCategory',
    'projects/new': "newProject",
    'projects/:id/edit': 'editProject',
    'projects/:id/rewards': 'projectRewardsList',
    'projects/:id': 'showProject',
    'users/:id': 'showUser'
  },

  index: function () {
    this.collection.fetch();
    var indexView = new Enginestarter.Views.Index({
      collection: this.collection
    });

    this._swapView(indexView);
  },

  projectIndex: function () {
    this.collection.fetch();
    var indexView = new Enginestarter.Views.ProjectIndex({
      collection: this.collection
    });

    this._swapView(indexView);
  },

  newProject: function () {
    if (Enginestarter.CURRENT_USER == undefined) {
      Backbone.history.navigate('', { trigger: true });
      window.alert('Please log in before creating a project');
      return;
    }

    this.categories.fetch();

    var project = new Enginestarter.Models.Project();
    var formView = new Enginestarter.Views.ProjectForm({
      collection: this.collection,
      model: project,
      categories: this.categories
    });

    this._swapView(formView);
  },

  editProject: function (id) {
    this.categories.fetch();
    var project = this.collection.getOrFetch(id);

    var formView = new Enginestarter.Views.ProjectEditForm({
      collection: this.collection,
      model: project
    });

    this._swapView(formView);
  },

  showProject: function (id) {
    var project = this.collection.getOrFetch(id);
    var showView = new Enginestarter.Views.ProjectShow({ model: project })

    this._swapView(showView);
  },

  showCategory: function (id) {
    this.collection.fetch();
    this.categories.fetch();
    var category = this.categories.getOrFetch(id)

    var catView = new Enginestarter.Views.ProjectIndex({
      category: category,
      collection: this.collection,
      categories: this.categories
    });

    this._swapView(catView);
  },

  categoryIndex: function () {
    this.categories.fetch();

    var indexView = new Enginestarter.Views.CategoryIndex({
      collection: this.categories
    })

    this._swapView(indexView);
  },

  projectRewardsList: function (id) {
    var project = this.collection.getOrFetch(id);

    var indexView = new Enginestarter.Views.ProjectRewardList({
      model: project
    });

    this._swapView(indexView);
  },

  showUser: function (id) {
    this.collection.fetch();
    var user = this.users.getOrFetch(id);

    var userView = new Enginestarter.Views.UserShow({
      model: user,
      collection: this.collection
    });

    this._swapView(userView)
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
