var gestor = require('./JS/gestorProve');


function consultar(){
  var contenido = document.getElementById('contenido');

  gestor.consultar(contenido);
}

function eliminar(id,rev){
  var res = confirm('Esta seguro de eliminar el documento?');
  if (res==1) {
    gestor.eliminar(id,rev);
  }

}
