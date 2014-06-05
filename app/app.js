import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'ember-error-template-bug', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'ember-error-template-bug');

export default App;
//Ember.FEATURES['ember-routing-named-substates'] = true;
//
////Ember.FEATURES['ember-routing-loading-error-substates'] = true;
//



App.IndexRoute = Ember.Route.extend({
});

App.ParentIndexRoute = Ember.Route.extend({
});

App.ParentChildRoute = Ember.Route.extend({
  model: function() {
    //   foo.bar();
  }
});



