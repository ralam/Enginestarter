Enginestarter.Views.ProjectForm = Backbone.View.extend({
  template: JST['projects/form'],

  tagName: 'form',
  className: 'project-form form-inline',

  initialize: function (options) {
    this.rewards = options.rewards;
  },

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
    var rewardData = formData.reward
    var projectData = formData.project;
    projectData.category_id = 1; //placeholder;
    var model = new Enginestarter.Models.Project();
    model.save(projectData, {
      success: function (project) {
        this.collection.add(project);
        this.addReward(rewardData, project);
        var projectId = project.attributes.id
        Backbone.history.navigate('/projects/' + projectId, { trigger: true})
      }.bind(this),
      error: function (errors, errorText) {
        console.log(errorText);
      }
    });
  },

  addReward: function (rewardData, project) {
    rewardData.project_id = project.attributes.id;
    var reward = new Enginestarter.Models.Reward();
    reward.save(rewardData, {
      success: function (reward) {
        this.rewards.add(reward);
      }.bind(this)
    });
  }
});
