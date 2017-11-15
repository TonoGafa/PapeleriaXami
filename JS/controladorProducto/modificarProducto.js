var gestor = require('./js/gestorProducto');

function mostrar(err,doc){
  if (err) {
    alert('Error al obtener = '+ err);

  }else{
  var cajaCodigoBa= document.getElementById('codigoBa');
  var cajaProducto= document.getElementById('producto');
  var cajaPrecio= document.getElementById('precio');
  cajaCodigoBa.value=doc.codigoBa;
  cajaProducto.value=doc.producto;
  cajaPrecio.value=doc.precio;
  }
}

function cargar() {
  var dir = window.location.href;
  var url = new URL(dir);
  var id = url.searchParams.get('id');
  var rev = url.searchParams.get('rev');
  document.getElementById('id').value=id;
  document.getElementById('rev').value=rev;


  gestor.obtener(id,mostrar);
}

function resultado(err,res) {
  if (err) {
    alert('No se pudieron guardar cambios');
  }else {
    alert('Los cambios se guardaron correctamente');
    window.location="productoCon.html";
  }
}
function guardarCambios(){
  var id = document.getElementById('id').value;
  var rev = document.getElementById('rev').value;
  var codigoBa = document.getElementById('codigoBa').value;
  var producto = document.getElementById('producto').value;
  var precio = document.getElementById('precio').value;

  gestor.guardarCambios(id,rev,codigoBa,producto,precio,resultado);
}
