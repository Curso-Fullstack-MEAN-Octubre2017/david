const Customer = require('../models/customer');
const Pet = require('../models/pet');

module.exports = (router) => {


	
	router.get('/customers', function(req, res, next) {
		var searchCriteria = {};
		if(req.query.searchTerm) {
			searchCriteria.dni = req.query.searchTerm;
		}
		console.log("Customer searchCriteria", searchCriteria);
		Customer.find(searchCriteria, (err, customers) => {
			if (err) {
				res.send(err);
			} else {
				res.json(customers);
			}
		}).sort({
			'_id' : -1
		});
	});
	
	
	

	router.get('/customers/:id', function(req, res, next) {
		
		
		var id = req.params.id;
		Customer.findById(id, (err, customer) => {
			if (err) {
				console.error(err);

			} else {
				res.json(customer);

			}
		});
	});

	router.put('/customers/:id', function(req, res, next) {


		var id = req.params.id;

		var customerDetails = {
			dni : req.body.dni,
			firstName : req.body.firstName,
			lastName : req.body.lastName,
			phone : req.body.phone,
			email : req.body.email,
			note : req.body.note
		}



		Customer.findByIdAndUpdate(id, {
			dni : customerDetails.dni,
			firstName : customerDetails.firstName,
			lastName : customerDetails.lastName,
			phone : customerDetails.phone,
			email : customerDetails.email,
			note : customerDetails.note
		}, (err, customer) => {

			if (err) {
				console.error(err);

			} else {

				res.json(customer);
			}

		});


	//
	});

	router.post('/customers/new', function(req, res, next) {

		
		var customer = new Customer({
				dni : req.body.dni,
				firstName : req.body.firstName,
				lastName : req.body.lastName,
				phone : req.body.phone,
				email : req.body.email,
				note : req.body.note
			});
		

		
		

		customer.save((err) => {
			
			if(err) {
				console.error(err);
				
			} else {
				
				res.json(customer);
				
			}
			
		});
	});
	
	router.delete("/customers/:id", function(req, res, next) {
		
		var id = req.params.id;
		
		

			Pet.deleteMany({owner:id}, (err, ret) =>{
				
				if(err) {
					console.error(err);
					
				} else {
					console.log("Las mascotas que coinciden con el criterio de busqueda han sido borradas: ", ret);
					
				}
				
				
			});



		
		Customer.findByIdAndRemove(id, (err, ret) => {
			
			if(err) {
				console.error(err);
				
			} else {
				console.log("El customer con esta ID ha sido borrado: ", ret);
				
			}
			
		});
	});


	return router;
}