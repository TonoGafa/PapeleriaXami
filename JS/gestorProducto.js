exports.guardarProducto = guardarProducto;
exports.consultar=consultar;
exports.eliminar=eliminar;
exports.obtener=obtener;
exports.guardarCambios=guardarCambios;



var PouchDB = require('./vendor/pouchdb');

var bd = PouchDB('papeleria');

function Producto(codigoBa,producto,precio){
  var obj = new Object();
  obj._id="producto-"+codigoBa;
  obj.codigoBa=codigoBa;
  obj.producto=producto;
  obj.precio=precio;
  return obj;
}

function guardarProducto(codigoBa,producto,precio){
var c = new Producto(codigoBa,producto,precio);
bd.put(c,function(err,doc){
  if(!err){
    alert('El producto ha sido guardado');

  }
});
}




function consultar(contenido){
bd.allDocs({include_docs:true,attachments:true,
  startkey:'contacto'}).then(function(doc){
    for(var i=0;i<doc.rows.length;i++){
      contenido.innerHTML+="<tr>"+
      "<td>"+doc.rows[i].doc.codigoBa+"</td>"+
      "<td>"+doc.rows[i].doc.producto+"</td>"+
      "<td>"+doc.rows[i].doc.precio+"</td>"+
      "<td><button class='boton-no' onclick='eliminar (\""+doc.rows[i].doc._id+"\",\""+doc.rows[i].doc._rev+"\")'>Eliminar</button></td>"+
      "<td><a class='boton' href='productoMod.html?id="+doc.rows[i].doc._id+"&rev="+doc.rows[i].doc._rev+"'>Modificar</a></td>"
      "</tr>";
    }
  }).catch(function(err){
    console.log('ERROR: No se pudo consultar');
  });
}


function eliminar(id,rev){
  bd.remove(id,rev,function(err,res){
    if (err) {
      alert('No se pudo eliminar')
    }else {
      alert('Documento Eliminado!');
      location.reload();
    }
  });
}

function obtener(id,mostrar) {
  bd.get(id,mostrar);

}
function guardarCambios(id,rev,codigoBa,producto,precio,resultado){
  bd.put({_id:''+id,
  _rev:''+rev,
  codigoBa:''+codigoBa,
  producto:''+producto,
  precio:''+precio},resultado)
}
