Enginestarter.Views.CategoryShow = Backbone.View.extend({
  template: JST['categories/show'],
  className: 'cateogry col-sm-2 title',

  render: function () {
    this.$el.html(this.template({ category: this.model }));

    return this;
  }
});
