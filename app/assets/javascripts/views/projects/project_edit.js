Enginestarter.Views.ProjectEditForm = Backbone.CompositeView.extend({
  template: JST['projects/edit_form'],

  tagName: 'form',
  className: 'project-form form-inline',

  initialize: function (options) {
    this.rewards = options.rewards;
    this.category = options.category;
    this.listenTo(this.categories, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.render);
    this.errors = [];
  },

  addReward: function (reward) {
    var view = new Enginestarter.Views.RewardShow({
      model: reward
    });
    this.addSubview('#rewards', view);
  },

  render: function () {

    this.$el.html(this.template({
      project: this.model,
      collection: this.collection,
      errors: this.errors
    }));
    this.model.rewards().each(this.addReward.bind(this));

    return this;
  },

});
