var gestor = require('./JS/gestorProve');


function consultar(){
  var contenido = document.getElementById('contenido');

  gestor.consultarProveedor(contenido);
}

function eliminar(id,rev){
  var res = confirm('Esta seguro de eliminar el Proveedor?');
  if (res==1) {
    gestor.eliminar(id,rev);
  }

}
