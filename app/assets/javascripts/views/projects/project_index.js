Enginestarter.Views.ProjectIndex = Backbone.CompositeView.extend({
  template: JST['projects/index'],

  render: function () {
    this.$el.html(this.template());
    this.attachSubviews()
    return this;
  }
})
