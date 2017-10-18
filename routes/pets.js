const Pet = require('../models/pet');

module.exports = (router) => {

	/* Sample REST service  (placeholder) */


	router.get('/customers/:id/pets', function(req, res, next) {
		var id = req.params.id;
		Pet.findById(id, (err, pet) => {
			if (err) {
				console.error(err);

			} else {
				res.json(pet);

			}
		});
	});

	router.put('/customers/:id/pets', function(req, res, next, $routeParams) {
		console.log("put pet /customers/:id")

		var id = req.params.id;

		var petDetails = {
				  chip: 		req.body.chip,
				  name: 		req.body.name,
				  date: 		req.body.date,
				  photo: 		req.body.photo,
				  breed: 		req.body.breed,
				  race: 		req.body.race,
				  description: 	req.body.description,
				  owner: 		$routeParams.id
		}



		Pet.findByIdAndUpdate(id, {
			  chip: petDetails.chip,
			  name: petDetails.name,
			  date: petDetails.date,
			  photo: petDetails.photo,
			  breed: petDetails.breed,
			  race: petDetails.race,
			  description: petDetails.description,
			  owner: petDetails.owner
		}, (err, pet) => {

			if (err) {
				console.error(err);

			} else {

				res.json(pet);
			}

		});


	//
	});

	router.post('/customers/pet', function(req, res, next) {
		console.log("post pet in /customers")

		var pet = new Pet({
			  chip: 		req.body.chip,
			  name: 		req.body.name,
			  date: 		req.body.date,
			  photo: 		req.body.photo,
			  breed: 		req.body.breed,
			  race: 		req.body.race,
			  description: 	req.body.description,
			  owner: 		req.body.owner
			});
		
		console.log("Insertando Pet", pet);
		
		
		pet.save((err) => {
			
			if(err) {
				console.error(err);
				
			} else {
				
				res.json(pet);
				
			}
			
		});
	});


	return router;
}