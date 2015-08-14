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
// 
// $(document).ready(function(){
//   Enginestarter.initialize();
// });
