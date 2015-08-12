Enginestarter.Views.ProjectForm = Backbone.View.extend({
  template: JST['projects/form'],

  tagName: 'form',
  className: 'new-project form-inline',

  events: {
    'click submit': 'submitForm'
  },

  render: function () {
    this.$el.html(this.template({
      project: this.model,
      collection: this.collection
    }));

    return this;
  },

  submitForm: function (event) {
    event.preventDefault();
  }
});
