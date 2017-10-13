const Customer = require('../models/customer');

module.exports = (router) => {

	/* Sample REST service  (placeholder) */
	router.get('/sample', function(req, res, next) {
		Customer.find({}, (err, customers) => {
			if (err) {
				res.send(err);
			} else {
				res.json(customers);
			}
		}).sort({'_id' : -1});
	});
	
	return router;
}