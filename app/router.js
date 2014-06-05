var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('parent', {path: '/parent/:parent_id'}, function() {
    this.route('child');
    //this.route('error');
  });
});

export default Router;
