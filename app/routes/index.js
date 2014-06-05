export default Ember.Route.extend({
  redirect: function() {
    this.transitionTo('parent', 1);
  }
});
