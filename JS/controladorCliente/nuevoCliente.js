var gestor = require('./js/gestorCliente');

function guardarCliente(){
var nombre = document.getElementById('nombre').value;
var ape_pa = document.getElementById('Ape_Pa').value;
var ape_ma = document.getElementById('Ape_Ma').value;
var edad = document.getElementById('edad').value;
var email = document.getElementById('email').value;
if (nombre=="" && ape_pa=="" && edad=="" && email=="") {
alert('Debe de llenar todos los campos');
}else{
  gestor.guardarCliente(nombre,ape_pa,ape_ma,edad,email);
  }
}
