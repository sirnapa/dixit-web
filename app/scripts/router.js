Dixitweb.Router.map(function () {
  this.resource('nosotros');
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
