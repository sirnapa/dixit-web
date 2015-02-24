Dixitweb.IndexRoute = Ember.Route.extend({
    actions: {
        siguiente: function() {
          $('#menu-principal').fullpage.moveSectionDown();
        }
    }
});
