export default Ember.Route.extend({
  model: function(params) {
    return Em.Object.create({ name: params.parent_id });
  },
  setupController: function(controller, model) {
    console.log('parent route', arguments);
    model.get('boom');
  }
});
