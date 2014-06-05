export default Em.Route.extend({
  setupController: function() {
    this._super(this,arguments);
    console.log('application route setupController');
  }
});
