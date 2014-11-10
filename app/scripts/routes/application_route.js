Dixitweb.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});

Dixitweb.Router.map(function() {
  this.resource('blogs');
  this.resource('nosotros');
  this.resource('trabajos');
});