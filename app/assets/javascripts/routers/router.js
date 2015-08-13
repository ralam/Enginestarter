Enginestarter.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.projects;
    this.rewards = options.rewards;
    this.categories = options.categories;
  },

  routes: {
    // '': 'index',
    'projects/new': "newProject",
    'projects/:id': 'showProject'
  },

  index: function () {
    var indexView = new Enginestarter.Views.ProjectIndex();

    this._swapView(indexView);
  },

  newProject: function () {
    // this.categories.fetch();

    var project = new Enginestarter.Models.Project();
    var formView = new Enginestarter.Views.ProjectForm({
      collection: this.collection,
      model: project,
      rewards: this.rewards,
      categories: this.categories
    });

    this._swapView(formView);
  },

  showProject: function (id) {
    var project = this.collection.getOrFetch(id);
    var showView = new Enginestarter.Views.ProjectShow({ model: project })

    this._swapView(showView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
