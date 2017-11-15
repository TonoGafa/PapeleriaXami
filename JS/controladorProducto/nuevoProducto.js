var gestor = require('./js/gestorProducto');

function guardar(){

var codigoBa = document.getElementById('codigoBa').value;
var producto = document.getElementById('producto').value;
var precio = document.getElementById('precio').value;
if (codigoBa=="" && producto=="" && precio=="") {
alert('Debe de llenar todos los campos');
}else {
gestor.guardarProducto(codigoBa,producto,precio);
}
}
