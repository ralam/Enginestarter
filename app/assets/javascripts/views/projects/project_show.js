Enginestarter.Views.ProjectShow = Backbone.View.extend({
  template: JST['projects/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    this.$el.html(this.template({ project: this.model }));

    return this;
  }
})
