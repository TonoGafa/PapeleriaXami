exports.guardarCliente = guardarCliente;

var PouchDB = require('./vendor/pouchdb');

var bdCli = PouchDB('clientes');


function Cliente(nombre,ape_pa,ape_ma,edad,email){
  var obj = new Object();
  obj._id="contacto-"+nombre;
  obj.nombre=nombre;
  obj.ape_pa=ape_pa;
  obj.ape_ma=ape_ma;
  obj.edad=edad;
  obj.email=email;
  return obj;
}

function guardarCliente(nombre,ape_pa,ape_ma,edad,email){
var c = new Contacto(nombre,ape_pa,ape_ma,edad,email);
bd.put(c,function(err,doc){
  if(!err){
    alert('El cliente ha sido guardado');
  }
});
}
