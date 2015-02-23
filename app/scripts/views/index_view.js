Dixitweb.IndexView = Ember.View.extend({
    didInsertElement : function(){
        this._super();

        $('#menu-principal').addClass('hide');

        $('#full-page').fullpage({
    	    sectionsColor: ['#0288D1', '#03A9F4', '#B3E5FC', '#FFFFFF', '#8BC34A','#212121','#727272']
        });
    }
});