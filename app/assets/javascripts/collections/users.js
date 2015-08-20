Enginestarter.Collections.Users = Backbone.Collection.extend({
  url: 'api/users',

  getOrFetch: function (id) {
    var collection = this;
    var user = this.get(id)

    if (user) {
      user.fetch();
    } else {
      user = new Enginestarter.Models.User({ id: id })
      collection.add(user);
      user.fetch({
        error: function (XHR, response, status) {
          collection.remove(user);
          user.set("errors", response.responseJSON);
        }
      });
    }

    return user;
  }
});

Enginestarter.Collections.users = new Enginestarter.Collections.Users();
