var gestor = require('./js/gestorProducto');


function consultar(){
  var contenido = document.getElementById('contenido');

  gestor.consultar(contenido);
}
function eliminar(id,rev){
  var res = confirm('Estas seguro de eliminar el producto?');
  if (res == 1){
    gestor.eliminar(id,rev);
  }

}
