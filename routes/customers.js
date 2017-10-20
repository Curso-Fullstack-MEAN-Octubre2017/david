const Customer = require('../models/customer');

module.exports = (router) => {

	/* Sample REST service  (placeholder) */
	router.get('/customers', function(req, res, next) {
		Customer.find({}, (err, customers) => {
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
		console.log("put /customers/:id")

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
		console.log("post /customers")
		
		var customer = new Customer({
				dni : req.body.dni,
				firstName : req.body.firstName,
				lastName : req.body.lastName,
				phone : req.body.phone,
				email : req.body.email,
				note : req.body.note
			});
		
		console.log("Insertando Customer", customer);
		
		

		customer.save((err) => {
			
			if(err) {
				console.error(err);
				
			} else {
				
				res.json(customer);
				
			}
			
		});
	});


	return router;
}