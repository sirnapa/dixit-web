Dixitweb.Router.map(function () {
  this.resource('blogs');
  this.resource('nosotros');
  this.resource('trabajos');
  this.resource('ideas',function(){
		this.resource('ideas.reciclame',{ path: '/reciclame' },function(){
	      this.route('problematica');
	      this.route('comunidad');
	      this.route('propuesta');
	      this.route('objetivo');
	      this.route('tecnologia');
	    });
	});
});
