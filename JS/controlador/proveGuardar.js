var gestor = require('./JS/gestorProve');

function guardar(){

var nombre = document.getElementById('nombre').value;
var rfc = document.getElementById('rfc').value;
var email = document.getElementById('email').value;
var direccion = document.getElementById('direccion').value;

gestor.guardarProveedor(nombre,rfc,email,direccion);

}
