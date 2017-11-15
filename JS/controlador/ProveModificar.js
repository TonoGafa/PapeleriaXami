var gestorProve = require('./js/gestorProve');

function mostrar(err,doc){
  var cajaNombre = document.getElementById('nombre');
  var cajaRfc = document.getElementById('rfc');
  var cajaEmail = document.getElementById('email');
  var cajaDireccion = document.getElementById('direccion');

  cajaNombre.value = doc.nombre;
  cajaRfc.value = doc.rfc;
  cajaEmail.value = doc.email;
  cajaDireccion.value = doc.direccion;
}

function cargarProveedor(){
  var dir =  window.location.href;
  var url = new URL(dir);
  var id = url.searchParams.get('id');
  var rev = url.searchParams.get('rev');
  document.getElementById('id').value=id;
  document.getElementById('rev').value=rev;


gestorProve.obtenerProveedor(id,mostrar);

}

function resultado(err,res){
  if (err) {
    alert('No se puedieron guardar cambios');
  }else {
    alert('Los cambios se guardaron correctamente');
    window.location='ProveConsul.html';
  }
}

function guardarCambiosProveedor(){
  var id = document.getElementById('id').value;
  var rev = document.getElementById('rev').value;
  var nombre = document.getElementById('nombre').value;
  var rfc = document.getElementById('rfc').value;
  var email = document.getElementById('email').value;
  var direccion = document.getElementById('direccion').value;

  gestor.guardarCambiosProveedor(id,rev,nombre,rfc,email,direccion,resultado);
}
