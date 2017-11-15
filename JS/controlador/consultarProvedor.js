var gestor = require('./js/gestor');


function consultar(){
  var contenido = document.getElementById('contenido');

  gestor.consultar(contenido);
}
