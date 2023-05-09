const router = require('express').Router();

// code snippet from MuscleWiki
const http = require('https');

const options = {
	method: 'GET',
	hostname: 'musclewiki.p.rapidapi.com',
	port: null,
	path: '/exercises',
	headers: {
		'X-RapidAPI-Key': '067ed42315msh5fbe5b9898134e4p129ad5jsn352fe37e50c4',
		'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log('successful API request');
	});
});

req.end();

const userRoutes = require('./userRoutes.js');

router.use('/users', userRoutes);

module.exports = router;
