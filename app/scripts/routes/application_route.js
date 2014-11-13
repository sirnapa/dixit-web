Dixitweb.Router.reopen({
  notifyGoogleAnalytics: function() {
    return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
  }.on('didTransition')
});

Dixitweb.EquipoRoute = Ember.Route.extend({
    model: function () {
        return [{
        	nombre: 'Rodrigo Cantero',
        	mail: 'rodrigo@dixit.com.py'
        },{
        	nombre: 'Michel Castellano',
        	mail: 'michelfcb@gmail.com'
        },{
        	nombre: 'Vidal Delgado',
        	mail: 'vidal@blogdeonda.com',
        	twitter: 'vidaldel92',
        	cv: 'vidal'
        },{
        	nombre: 'Luis Godoy',
        	mail: 'luis.godoy.dure@gmail.com'
        },{
        	nombre: 'Hugo Monzón',
        	mail: 'hugo@dixit.com.py'
        },{
        	nombre: 'Verónica Mercado',
        	mail: 'vero@dixit.com.py'
        },{
        	nombre: 'Osmar Olmedo',
        	mail: 'osmar@dixit.com.py'
        },{
        	nombre: 'Nelson Páez',
        	mail: 'nelson@dixit.com.py',
        	twitter: 'sirnapa',
        	cv: 'nelson'
        },{
        	nombre: 'Luis Ríos',
        	twitter: 'nosoyunvampire'
        },{
        	nombre: 'Rubén Romero',
        	mail: 'ruben.drm91@gmail.com'
        },{
        	nombre: 'Juan Manuel Samudio',
        	mail:'juanmanuelsamudio@gmail.com',
        	cv: 'juanma'
        }];
    }
});
