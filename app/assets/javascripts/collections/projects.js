Enginestarter.Collections.Projects = Backbone.Collection.extend({
  url: 'api/projects',
  model: Enginestarter.Models.Project,

  parse: function(data) {
    return data.projects
  },

  getOrFetch: function (id) {
    var collection = this;
    var project = this.get(id);

    if (project) {
      project.fetch();
    } else {
      project = new Enginestarter.Models.Project({ id: id });
      collection.add(project);
      project.fetch({
        error: function (XHR, response, status) {
          collection.remove(project);
          project.set("errors", response.responseJSON);
        }
      });
    }

    return project;
  }
});

Enginestarter.Collections.projects = new Enginestarter.Collections.Projects();
