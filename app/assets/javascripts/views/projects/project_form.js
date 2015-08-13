Enginestarter.Views.ProjectForm = Backbone.View.extend({
  template: JST['projects/form'],

  tagName: 'form',
  className: 'project-form form-inline',

  initialize: function (options) {
    this.rewards = options.rewards;
  },


  events: {
    'submit': 'submitForm',
    'click button.add-reward': 'addRewardItem'
  },

  render: function () {
    this.$el.html(this.template({
      project: this.model,
      collection: this.collection
    }));

    return this;
  },

  addRewardItem: function (event) {
    event.preventDefault();
    var $button = $(event.currentTarget);
    var $rewardItem = $('div.reward-item').clone();
    $button.before($rewardItem);
  },

  submitForm: function (event) {
    event.preventDefault();

    var formData = $(event.currentTarget).serializeJSON();
    var projectData = formData.project;
    projectData.category_id = 1; //placeholder;
    var model = new Enginestarter.Models.Project();
    model.save(formData, {
      success: function (project) {
        this.collection.add(project);
        var projectId = project.attributes.id
        Backbone.history.navigate('/projects/' + projectId, { trigger: true})
      }.bind(this),
      error: function (errors, errorText) {
        console.log(errorText);
      }
    });
  },
});
