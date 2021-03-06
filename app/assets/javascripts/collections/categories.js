Enginestarter.Collections.Categories = Backbone.Collection.extend({
  url: 'api/categories',

  getOrFetch: function (id) {
    var collection = this;
    var category = this.get(id);

    if (category) {
      category.fetch();
    } else {
      category = new Enginestarter.Models.Category({ id: id });
      collection.add(category);
      category.fetch({
        error: function (XHR, response, status) {
          category.set("errors", response.responseJSON);
          collection.remove(category);
        }
      });
    }

    category.attributes;
    return category;
  }
});


Enginestarter.Collections.categories = new Enginestarter.Collections.Categories();
