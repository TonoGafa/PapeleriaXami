var gestor = require('./JS/gestorProve');

function guardar(){
alert("Hola boton");
var nombre = document.getElementById('nombre').value;
var edad = document.getElementById('rfc').value;
var email = document.getElementById('email').value;
var direccion = document.getElementById('direccion').value;

gestor.guardarProveedor(nombre,rfc,email,direccion);

}
