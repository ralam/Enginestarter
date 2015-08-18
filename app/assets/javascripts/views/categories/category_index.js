Enginestarter.Views.CategoryIndex = Backbone.CompositeView.extend({
  template: JST['categories/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
  },

  addCategory: function (category) {
    var view = new Enginestarter.Views.CategoryShow({
      model: category
    });
    this.addSubview('#categories', view);
  },

  render: function() {
    this.$el.html(this.template());
    if (this.collection.models.length > 0) {
      this.collection.models.forEach(this.addCategory.bind(this));
    }

    return this;
  }
});
