var gestor = require('./js/gestorProducto');

function guardar(){

var codigoBa = document.getElementById('codigoBa').value;
var producto = document.getElementById('producto').value;
var precio = document.getElementById('precio').value;

gestor.guardarProducto(codigoBa,producto,precio);
}
