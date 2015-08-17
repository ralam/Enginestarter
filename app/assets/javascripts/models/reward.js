Enginestarter.Models.Reward = Backbone.Model.extend({
  urlRoot: 'api/rewards',

  rewarding: function () {
    if (!this._rewarding) {
      this._rewarding = new Enginestarter.Models.Rewarding([], { project: this});
    }

    return this._rewarding
  },

  parse: function (response) {
    if (response.rewardings) {
      this.rewardings().set(response.rewardings, { parse: true });
      delete response.rewardings;
    }

    return response;
  }
});
