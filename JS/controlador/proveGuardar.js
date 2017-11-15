var gestor = require('./JS/gestorProve');

function guardar(){
var nombre = document.getElementById('nombre').value;
var rfc = document.getElementById('rfc').value;
var email = document.getElementById('email').value;
var direccion = document.getElementById('direccion').value;
if (nombre=="" && rfc=="" email=="" && direccion=="") {
alert('Debe de llenar todos los campos');
}else {
gestor.guardarProveedor(nombre,rfc,email,direccion);
  }
}
