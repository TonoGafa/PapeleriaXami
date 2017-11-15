var gestor = require('./JS/gestorProve');


function consultarProveedor(){
  var contenido = document.getElementById('contenido');

  gestor.consultarProveedor(contenido);
}

function eliminarProveedor(id,rev){
  var res = confirm('Esta seguro de eliminar el Proveedor?');
  if (res==1) {
    gestor.eliminarProveedor(id,rev);
  }

}
