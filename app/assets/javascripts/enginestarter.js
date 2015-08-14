window.Enginestarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Enginestarter.Routers.Router({
      $rootEl: $("div.content"),
      projects: Enginestarter.Collections.projects,
      rewards: Enginestarter.Collections.rewards,
      categories: Enginestarter.Collections.categories
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  $.ajax({
    url: "/api/users.json",
    type: "GET",
    success: function (userData) {
      if (userData.id != 'null') {
        Enginestarter.CURRENT_USER = { id: userData.id }
      } else {
        Enginestarter.CURRENT_USER = undefined;
      }
    }
  });
  Enginestarter.initialize();
});
