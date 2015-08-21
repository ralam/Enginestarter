Enginestarter.Views.ProjectEditForm = Backbone.CompositeView.extend({
  template: JST['projects/edit_form'],
  rewardTemplate: JST['rewards/new'],

  tagName: 'form',
  className: 'project-form form-inline',

  initialize: function (options) {
    this.category = options.category;
    this.image_url = this.model.attributes.image_url;
    this.listenTo(this.categories, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.render);
    this.errors = [];
  },

  events: {
    'submit': 'submitForm',
    'click button.add-reward': 'addRewardItem',
    'click a.add-image': 'addImage',
    'click button#cancel': 'cancel',
    'keyup .project-body': 'renderPreview',
    'click .close-reward': 'closeRewardItem'
  },

  render: function () {
    this.rewardCounter = this.model.rewards().length;

    this.$el.html(this.template({
      project: this.model,
      errors: this.errors,
      image: this.image_url || this.model.get("image_url")
    }));
    this.renderRewards();

    return this;
  },

  addRewardItem: function (event) {
    event.preventDefault();
    $(event.currentTarget).blur();
    this.rewardCounter += 1;
    $('div.reward-items').append(this.rewardTemplate({counter: this.rewardCounter}));
  },

  closeRewardItem: function (event) {
    event.preventDefault();
    this.rewardCounter -= 1;
    event.currentTarget.parentElement.remove();
  },

  addImage: function (event) {
    event.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result) {
      if (error) {
        return;
      }
      var data = result[0];
      this.image_url = data.url;
      this.render();
    }.bind(this));
  },

  addReward: function (reward) {
    var view = new Enginestarter.Views.RewardShow({
      model: reward,
      active: false
    });
    this.addSubview('#rewards', view);
  },

  renderRewards: function () {
    this.model.rewards().models.sort(
      function(a, b) {return a.attributes.level - b.attributes.level}
    );
    this.model.rewards().each(this.addReward.bind(this));
  },

  cancel: function (event) {
    event.preventDefault();
    Backbone.history.navigate('projects/' + this.model.id, { trigger: true})
  },

  renderPreview: function (event) {
    var content = $(event.currentTarget).val();
    this.$(".preview").html(marked(_.escape(content)));
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
