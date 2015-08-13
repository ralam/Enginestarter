Enginestarter.Collections.Rewards = Backbone.Collection.extend({
  url: 'api/rewards',
  model: Enginestarter.Models.Reward,

  getOrFetch: function (id) {
    var collection = this;
    var project = this.get(id);

    if (project) {
      project.fetch();
    } else {
      project = new Enginestarter.Models.Reward({ id: id });
      collection.add(project);
      project.fetch({
        error: function () {
          collection.remove(project);
        }
      });
    }

    return project;
  }
});

Enginestarter.Collections.rewards = new Enginestarter.Collections.Rewards();
