window.Enginestarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Enginestarter.Routers.Router({
      $rootEl: $("div.content"),
      projects: Enginestarter.Collections.projects
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Enginestarter.initialize();
});
