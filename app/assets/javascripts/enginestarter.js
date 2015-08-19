window.Enginestarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Enginestarter.Routers.Router({
      $rootEl: $("div.content"),
      projects: Enginestarter.Collections.projects,
      categories: Enginestarter.Collections.categories,
      users: Enginestarter.Collections.users
    });
    Backbone.history.start();
  }
};
