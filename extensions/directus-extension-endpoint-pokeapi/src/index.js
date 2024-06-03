export default {
	id: 'pokeapi',
	handler: (router) => {
		router.get('/', async (req, res) => {
			try {
				res.status(200).json({"data": "Hello"});
			} catch (error) {
				res.status(500);
				res.send(error.message);
			}
		});
	},
};