var gestor = require('./JS/gestorCliente');


function consultarCliente(){
  var contenido = document.getElementById('contenido');

  gestor.consultarCliente(contenido);
}

function eliminarCliente(id,rev){
  var res = confirm('¿Esta seguro de eliminar el Cliente?');
  if (res==1) {
    gestor.eliminarCliente(id,rev);
  }

}
