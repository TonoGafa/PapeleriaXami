exports.guardarProveedor = guardarProveedor;
exports.consultarProveedor=consultarProveedor;

var PouchDB = require('./vendor/pouchdb');

var bd = PouchDB('papeleria');


function Proveedor(nombre,rfc,email,direccion){
  var obj = new Object();
  obj._id="proveedor-"+nombre;
  obj.nombre=nombre;
  obj.rfc=rfc;
  obj.email=email;
  obj.direccion=direccion;

  return obj;
}

function guardarProveedor(nombre,rfc,email,direccion){
var c = new Proveedor(nombre,rfc,email,direccion);
bd.put(c,function(err,doc){
  if(!err){
    alert('El Proveedor ha sido guardado');
  }
});
}

function consultarProveedor(contenido){
bd.allDocs({include_docs:true,attachments:true,
  startkey:'proveedor'}).then(function(doc){
    for(var i=0;i<doc.rows.length;i++){
      contenido.innerHTML+="<tr>"+
      "<td>"+doc.rows[i].doc.nombre+"</td>"+
      "<td>"+doc.rows[i].doc.rfc+"</td>"+
      "<td>"+doc.rows[i].doc.email+"</td>"+
      "<td>"+doc.rows[i].doc.direccion+"</td>"+

      "<td><button class='boton-no' onclick='eliminar(\""+doc.rows[i].doc._id+"\",\""+doc.rows[i].doc._rev+"\")'>Eliminar</button></td>"+
      "<td><a class='boton' href='proveedorModificar.html?id="+doc.rows[i].doc._id+"&rev="+doc.rows[i].doc._rev+"'>Modificar</a></td>"+
      "</tr>";
    }
  }).catch(function(err){
    console.log('ERROR: No se pudo consultar');
  });
}

function eliminarProveedor(id,rev){
  bd.remove(id,rev,function(err,res){
  if (err) {
    alert('No se pudo eliminar');
  }else {
    alert('Documento eliminado');
    // window.location="consultar.html";
    location.reload();
  }
});
}

function obtenerProveedor(id,mostrar){
  bd.get(id,mostrar);
}

function guardarCambiosProveedor(id,rev,nombre,rfc,email,direccion,resultado){
  bd.put({_id:''+id,_rev:rev,nombre:''+nombre,rfc:''+rfc,email:''+email,direccion:''+direccion},resultado);
}
