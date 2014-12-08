Dixitweb.Router.map(function () {
  this.resource('nosotros');
  this.resource('equipo');
  this.resource('ideas',function(){
		this.resource('ideas.reciclame',{ path: '/reciclame' },function(){
	      this.route('problematica');
	      this.route('comunidad');
	      this.route('propuesta');
	      this.route('objetivo');
	      this.route('tecnologia');
	      this.route('premios-conecta');
	    });
	});
  this.resource('trabajos');
  this.resource('blogs');
  this.resource('ghost',function(){
	this.route('post');
	this.route('ejemplo-post');
	this.route('formato');
	this.route('imagenes');
	this.route('videos');
	this.route('botones');
	this.route('perfil');
	this.route('cambiar-clave');
  });
});
