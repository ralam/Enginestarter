Enginestarter.Collections.Users = Backbone.Collection.extend({
  url: 'api/users',

  getOrFetch(id): function (id) {
    var collection = this;
    var user = this.get(id)

    if (user) {
      user.fetch();
    } else {
      user = new Enginestarter.Models.User({ id: id })
      collection.add(user);
      user.fetch({
        error: function () {
          collection.remove(user);
        }
      });
    }

    return user;
  }
});

Enginestarter.Collections.users = new Enginestarter.Collections.Users();
