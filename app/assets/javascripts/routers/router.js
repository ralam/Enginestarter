Enginestarter.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.projects;
  },

  routes: {
    'projects/:id': 'showProject'
  },

  showProject: function (id) {
    var project = this.collection.getOrFetch(id);

    var showView = new Enginestarter.Views.ShowProject({ model: project })

    this._swapView(showView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
