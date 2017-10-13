/**
 * 
 */
const Customer = require('../models/customer');



//------------------------------------------------------Funcion insertar varios
function insert(){
var newCustomer = [
	{
		"dni": "32111111-A",
		"firstName": "John",
		"lastName": "Black",
		"phone": "600000001",
		"mail": "a@a.com",
		"note": "Tratarlo de usted"
	},
	{
		"dni": "32111112-B",
		"firstName": "Jack",
		"lastName": "White",
		"phone": "600000002",
		"mail": "b@b.com",
		"note": "Tratarlo de usted"
	},
	{
		"dni": "32111113-C",
		"firstName": "Jake",
		"lastName": "Green",
		"phone": "600000003",
		"mail": "c@c.com",
		"note": "Tratarlo de usted"
	},
	{
		"dni": "32111114-D",
		"firstName": "Jade",
		"lastName": "Blue",
		"phone": "600000004",
		"mail": "d@d.com",
		"note": "Tratarlo de usted"
	}
];

Customer.insertMany(newCustomer, (err, ret) => {
	
	if(err) {
		console.error(err);
		
	} else {
		console.log("Han sido agregados estos dueños: ", ret);
		console.log("Todo correcto!!");
		
	}
	
});

}
//------------------------------------------------------Funcion insertar varios





//------------------------------------------------------Funcion encontrar por ID
function findID(){
Customer.findById("59dde71c63e107135cfffed8", (err, ret) => {
	if(err) {
		console.error(err);
		
	} else {
		console.log("El señor con esa ID es: ", ret);
		console.log("Todo correcto!!");
		
	}
});

}
//------------------------------------------------------Funcion encontrar por ID



//------------------------------------------------------Funcion actualizar por ID
function updateID(){
Customer.findByIdAndUpdate("59dde71c63e107135cfffed8", {note:"Tutearlo"}, (err, ret) =>{
	
	if(err) {
		console.error(err);
		
	} else {
		console.log("El señor con esa ID ha sido actualizado: ", ret);
		console.log("Todo correcto!!");
		
	}
	
});

}
//------------------------------------------------------Funcion actualizar por ID





//------------------------------------------------------Funcion borrar por ID
function removeID(){
Customer.findByIdAndRemove("59dde71c63e107135cfffed8", (err, ret) => {
	
	if(err) {
		console.error(err);
		
	} else {
		console.log("El señor con esta ID ha sido borrado: ", ret);
		console.log("Todo correcto!!");
		
	}
	
});

}
//------------------------------------------------------Funcion borrar por ID





//findID();
//updateID();
//removeID();
//insert();




//----------------------------------------------------------Funcion encontrar
function find(){
Customer.find({dni:"32111114-D"}, (err, ret) => {
	
	if(err) {
		console.error(err);
		
	} else {
		console.log("Los dueños que coinciden con el criterio de busqueda son: ", ret);
		console.log("Todo correcto!!");
		
	}

});

}
//----------------------------------------------------------Funcion encontrar



//----------------------------------------------------------Funcion actualizar
function update(){
Customer.updateMany({dni:"32111114-D"},{note:"nanai"}, (err, ret) =>{
	
	if(err) {
		console.error(err);
		
	} else {
		console.log("Los dueños que coinciden con el criterio de busqueda han sido actualizados: ", ret);
		console.log("Todo correcto!!");
		
	}
	
	
});

}
//----------------------------------------------------------Funcion actualizar



//---------------------------------------------------------------Funcion borrar
function del(){
Customer.deleteMany({dni:"32111111-A",dni:"32111112-B",dni:"32111113-C",dni:"32111114-D"}, (err, ret) =>{
	
	if(err) {
		console.error(err);
		
	} else {
		console.log("Los dueños que coinciden con el criterio de busqueda han sido borrados: ", ret);
		console.log("Todo correcto!!");
		
	}
	
	
});

}
//---------------------------------------------------------------Funcion borrar




//llama a la funcion find con retraso
//setTimeout(function(){ find(); }, 2000);

//llama a la funcion update con retraso
//setTimeout(function(){ update(); }, 2000);

//llama a la funcion delete con retraso
//setTimeout(function(){ del(); }, 2000);
