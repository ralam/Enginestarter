Enginestarter.Views.ProjectRewardList = Backbone.CompositeView.extend({
  template: JST['projects/rewards'],
  className: 'container-fluid',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    this.$el.html(this.template({ project: this.model }));

    return this;
  }
})
