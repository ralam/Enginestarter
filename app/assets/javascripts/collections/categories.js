Enginestarter.Collections.Categories = Backbone.Collection.extend({
  url: 'api/categories',

  getOrFetch: function (id) {
    var collection = this;
    var category = this.get(id);

    if (category) {
      category.fetch();
    } else {
      category = new Enginestarter.Models.Project({ id: id });
      collection.add(category);
      category.fetch({
        error: function () {
          collection.remove(category);
        }
      });
    }

    return category;
  }
});


Enginestarter.Collections.categories = new Enginestarter.Collections.Categories();
