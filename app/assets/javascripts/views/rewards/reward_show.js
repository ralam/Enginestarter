Enginestarter.Views.RewardShow = Backbone.View.extend({
 template: JST['rewards/show'],

 className: 'row',

 render: function () {
   this.$el.html(this.template({
     reward: this.model
   }));

   return this;
 }
});
