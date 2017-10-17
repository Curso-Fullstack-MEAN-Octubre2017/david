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
		//		res.sendStatus(300);

		var id = req.params.id;

		var custo = {
			dni : req.body.dni,
			firstName : req.body.firstName,
			lastName : req.body.lastName,
			phone : req.body.phone,
			email : req.body.email,
			note : req.body.note
		}



		Customer.findByIdAndUpdate(id, {
			dni : custo.dni,
			firstName : custo.firstName,
			lastName : custo.lastName,
			phone : custo.phone,
			email : custo.email,
			note : custo.note
		}, (err, customer) => {

			if (err) {
				console.error(err);

			} else {

				res.json(customer);
			}

		});


	//
	});

	router.post('/customers/:id', function(req, res, next) {
		res.sendStatus(300);
	});


	return router;
}