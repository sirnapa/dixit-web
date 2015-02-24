Dixitweb.IndexView = Ember.View.extend({
    didInsertElement : function(){
        this._super();

        $('#menu-principal').addClass('hide');

        $('#full-page').fullpage({});
    }
});