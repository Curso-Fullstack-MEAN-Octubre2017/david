const Pet = require('../models/pet');


module.exports = (router) => {


    

		

	



	router.get('/customers/:id/pets', function(req, res, next) {

				var id = req.params.id;
				Pet.find({owner: id},(err, pet) => {
					
					if (err) {
						console.error(err);


					} else {

						res.json(pet);


					}
				});
			});
	
	router.get('/customers/:id/pets/:idPet', function(req, res, next) {

		var id = req.params.id;
		var idPet = req.params.idPet;

				Pet.findById(idPet,(err, pet) => {
					
					if (err) {
						console.error("ID no encontrado");


					} else {

						res.json(pet);



					}
				});
			});
	
	


	router.put("/customers/:id/pets/:idPet", function(req, res, next) {
		
		var id = req.params.id;
		var idPet = req.params.idPet;



		var petDetails = {
				  chip: 		req.body.chip,
				  name: 		req.body.name,
				  date: 		req.body.date,
				  photo: 		req.body.photo,
				  breed: 		req.body.breed,
				  race: 		req.body.race,
				  description: 	req.body.description,
				  owner: 		id
		}




		Pet.findByIdAndUpdate(idPet, {
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

	router.post("/customers/:id/pets", function(req, res, next) {

		var id= req.params.id;

		var pet = new Pet({
			  chip: 		req.body.chip,
			  name: 		req.body.name,
			  date: 		req.body.date,
			  photo: 		req.body.photo,
			  breed: 		req.body.breed,
			  race: 		req.body.race,
			  description: 	req.body.description,
			  owner: 		id
			});
		

		
		
		pet.save((err) => {
			
			if(err) {
				console.error(err);
				
			} else {
				
				res.json(pet);
				
			}
			
		});
	});
	
	
	router.delete("/customers/:id/pets/:idPet", function(req, res, next) {
		
		
		var id = req.params.id;
		var idPet = req.params.idPet;
		

		
		Pet.findByIdAndRemove(idPet, (err, ret) => {
		
			if(err) {
				console.error(err);
		
			} else {

				console.log("El animal con esta ID ha sido borrado: ", ret);

			}
		
		});
	});




	return router;
}