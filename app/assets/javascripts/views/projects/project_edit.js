Enginestarter.Views.ProjectEditForm = Backbone.CompositeView.extend({
  template: JST['projects/edit_form'],

  tagName: 'form',
  className: 'project-form form-inline',

  initialize: function (options) {
    this.rewards = options.rewards;
    this.rewardCounter = this.rewards.length + 1;
    this.category = options.category;
    this.listenTo(this.categories, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.render);
    this.errors = [];
  },

  render: function () {
    this.rewardCounter = this.rewards.length + 1;

    this.$el.html(this.template({
      project: this.model,
      errors: this.errors,
      counter: this.rewardCounter
    }));
    this.model.rewards().each(this.addReward.bind(this));

    return this;
  },

  events: {
    'submit': 'submitForm',
    'click button.add-reward': 'addRewardItem',
    'click a.add-image': 'addImage',
    'click button#cancel': 'cancel'
  },

  addRewardItem: function (event) {
    event.preventDefault();
    var $button = $(event.currentTarget);
    var $rewardItem = $('div.reward-item').last().clone();
    $rewardItem.find('input').each( function () {
      $(this).val('');
    });
    this.rewardCounter += 1;
    $rewardItem.find('span.reward-title').html('Reward #' + this.rewardCounter);
    $button.before($rewardItem);
  },

  addImage: function (event) {
    event.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result) {
      if (error) {
        return;
      }
      var data = result[0];
      this.image_url = data.url;
    }.bind(this));
  },

  addReward: function (reward) {
    var view = new Enginestarter.Views.RewardShow({
      model: reward
    });
    this.addSubview('#rewards', view);
  },

  cancel: function (event) {
    event.preventDefault();
    this.remove();
    window.history.back();
  },

  submitForm: function (event) {
    event.preventDefault();

    var formData = $(event.currentTarget).serializeJSON();
    var projectData = formData.project;
    projectData.image_url = this.image_url;

    this.model.set(projectData)

    this.model.save(formData, {
      success: function (project) {
        this.collection.add(project);
        var projectId = project.attributes.id
        Backbone.history.navigate('/projects/' + projectId, { trigger: true})
      }.bind(this),
      error: function (errors, errorText) {
        this.errors = errorText.responseJSON;
        this.render();
      }.bind(this)
    });
  },

});
