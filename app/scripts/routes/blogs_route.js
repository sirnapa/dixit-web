Dixitweb.BlogsRoute = Ember.Route.extend({
    model: function () {
        return [{
        	nombre: 'Funnix',
            sitio: 'funnix.net',
            logo: 'funnix.svg',
        	facebook: 'funnixblog',
            twitter: 'funnixblog'
        },{
        	nombre: 'Un blog... de onda',
            sitio: 'blogdeonda.com',
            logo: 'blogdeonda.svg',
            facebook: 'blogdeonda',
            twitter: 'blogdeonda'
        },{
        	nombre: 'RocknTown',
            sitio: 'rockntown.com',
            logo: 'rockntown.svg',
            facebook: 'rockntown',
            twitter: 'rockntown'
        },{
        	nombre: 'Akasha blog',
            sitio: 'akashablog.net',
            logo: 'akashablog.png',
            facebook: 'akashablog',
            twitter: 'akashablog'
        }];
    }
});
