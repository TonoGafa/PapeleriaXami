exports.guardarCliente = guardarCliente;
exports.consultarCliente=consultarCliente;
exports.eliminarCliente=eliminarCliente;
exports.obtenerCliente=obtenerCliente;
exports.guardarCambiosCliente=guardarCambiosCliente;

var PouchDB = require('./vendor/pouchdb');

var bd = PouchDB('papeleria');


function Cliente(nombre,ape_pa,ape_ma,edad,email){
  var obj = new Object();
  obj._id="cliente-"+nombre;
  obj.nombre=nombre;
  obj.ape_pa=ape_pa;
  obj.ape_ma=ape_ma;
  obj.edad=edad;
  obj.email=email;
  return obj;
}

function guardarCliente(nombre,ape_pa,ape_ma,edad,email){
var c = new Cliente(nombre,ape_pa,ape_ma,edad,email);
bd.put(c,function(err,doc){
  if(!err){
    alert('El cliente ha sido guardado');
    location.reload();
  }
});
}

function consultarCliente(contenido){
bd.allDocs({include_docs:true,attachments:true,
  startkey:'cliente'}).then(function(doc){
    for(var i=0;i<doc.rows.length;i++){
      contenido.innerHTML+="<tr>"+
      "<td>"+doc.rows[i].doc.nombre+"</td>"+
      "<td>"+doc.rows[i].doc.ape_pa+"</td>"+
      "<td>"+doc.rows[i].doc.ape_ma+"</td>"+
      "<td>"+doc.rows[i].doc.edad+"</td>"+
      "<td>"+doc.rows[i].doc.email+"</td>"+
      "<td><button class='boton-no' onclick='eliminarCliente(\""+doc.rows[i].doc._id+"\",\""+doc.rows[i].doc._rev+"\")'>Eliminar</button></td>"+
      "<td><a class='boton' href='clienteModificar.html?id="+doc.rows[i].doc._id+"&rev="+doc.rows[i].doc._rev+"'>Modificar</a></td>"+
      "</tr>";
    }
  }).catch(function(err){
    console.log('ERROR: No se pudo consultar');
  });
}

function eliminarCliente(id,rev){
  bd.remove(id,rev,function(err,res){
  if (err) {
    alert('No se pudo eliminar el cliente');
  }else {
    alert('Cliente eliminado');
    // window.location="consultar.html";
    location.reload();
  }
});
}

function obtenerCliente(id,mostrarCliente){
  bd.get(id,mostrarCliente);
}

function guardarCambiosCliente(id,rev,nombre,ape_pa,ape_ma,edad,email,resultado){
  bd.put({_id:''+id,_rev:rev,nombre:''+nombre,ape_pa:''+ape_pa,ape_ma:''+ape_ma,edad:''+edad,email:''+email},resultado);
}
