Enginestarter.Models.Reward = Backbone.Model.extend({
  urlRoot: 'api/rewards',

  rewardings: function () {
    if (!this._rewardings) {
      this._rewardings = new Enginestarter.Models.Rewarding([], { project: this});
    }

    return this._rewardings
  },

  parse: function (response) {
    if (response.rewardings) {
      this.rewardings().set(response.rewardings, { parse: true });
      delete response.rewardings;
    }

    return response;
  }
});
