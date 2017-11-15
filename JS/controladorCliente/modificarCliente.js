var gestor = require('./JS/gestorCliente');

function mostrarCliente(err,doc){
  var cajaNombre = document.getElementById('nombre');
  var cajaApe_Pa = document.getElementById('Ape_Pa');
  var cajaApe_Ma = document.getElementById('Ape_Ma');
  var cajaEdad = document.getElementById('edad');
  var cajaEmail = document.getElementById('email');

  cajaNombre.value = doc.nombre;
  cajaApe_Pa.value = doc.ape_pa;
  cajaApe_Ma.value = doc.ape_ma;
  cajaEdad.value = doc.edad;
  cajaEmail.value = doc.email;
}

function cargarCliente(){
  var dir =  window.location.href;
  var url = new URL(dir);
  var id = url.searchParams.get('id');
  var rev = url.searchParams.get('rev');
  document.getElementById('id').value=id;
  document.getElementById('rev').value=rev;


gestor.obtenerCliente(id,mostrarCliente);

}

function resultadoCliente(err,res){
  if (err) {
    alert('No se puedieron guardar cambios');
  }else {
    alert('Los cambios se guardaron correctamente');
    window.location='clienteConsultar.html';
  }
}

function guardarCambiosCliente(){
  var id = document.getElementById('id').value;
  var rev = document.getElementById('rev').value;
  var nombre = document.getElementById('nombre').value;
  var ape_pa = document.getElementById('Ape_Pa').value;
  var ape_ma = document.getElementById('Ape_Ma').value;
  var edad = document.getElementById('edad').value;
  var email = document.getElementById('email').value;

  gestor.guardarCambiosCliente(id,rev,nombre,ape_pa,ape_ma,edad,email,resultadoCliente);
}
