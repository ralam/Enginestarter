Enginestarter.Views.ProjectForm = Backbone.View.extend({
  template: JST['projects/form'],

  tagName: 'form',
  className: 'new-project form-inline',

  events: {
    'submit': 'submitForm'
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

    var formData = $(event.currentTarget).serializeJSON();
    var projectData = formData.project;
    projectData.category_id = 1; //placeholder;
    console.log(projectData);
    // var model = new Enginestarter.Models.Project();
    // model.save(projectData, {
    //   success: function (project) {
    //     this.collection.add(project) {
    //       Backbone.history.navigate('/', { trigger: true})
    //     }
    //   }
    // });

  }
});
