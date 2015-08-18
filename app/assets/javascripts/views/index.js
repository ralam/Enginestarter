Enginestarter.Views.Index = Backbone.View.extend({
  template: JST['index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
  },

  render: function () {
    if (this.collection) {
      var projects = this.collection.first(4);
    } else {
      var projects = [];
    }
    this.$el.html(this.template({ projects: projects}));

    return this;
  }
});
