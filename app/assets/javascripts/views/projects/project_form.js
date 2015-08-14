Enginestarter.Views.ProjectForm = Backbone.View.extend({
  template: JST['projects/form'],

  tagName: 'form',
  className: 'project-form form-inline',

  initialize: function (options) {
    this.rewards = options.rewards;
    this.rewardCounter = 1;
    this.categories = options.categories;
    this.listenTo(this.categories, 'sync', this.render);
  },


  events: {
    'submit': 'submitForm',
    'click button.add-reward': 'addRewardItem',
    'click button.add-image': 'addImage'
  },

  render: function () {

    this.$el.html(this.template({
      project: this.model,
      collection: this.collection,
      categories: this.categories
    }));

    return this;
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
      var data = result[0];
      this.image_url = data.url;
    }.bind(this));
  },

  submitForm: function (event) {
    event.preventDefault();

    var formData = $(event.currentTarget).serializeJSON();
    var projectData = formData.project;
    var model = new Enginestarter.Models.Project();
    projectData.image_url = this.image_url;
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
