var Dixitweb = window.Dixitweb = Ember.Application.create();

Dixitweb.ApplicationView = Ember.View.extend({
    initFoundation: function () {
        Ember.$(document).foundation();  
    }.on('didInsertElement')
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
