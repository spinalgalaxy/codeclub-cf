// src/index.js
var src_default = {
	async fetch(request, env, ctx, options) {
		function getRandomInt(max) {
			return Math.floor(Math.random() * max);
		}
		let rnd_num = getRandomInt(5);
		const superPowerMap = {
			0: "invisbility",
			1: "bug-free coding :)",
			2: "ultrasonic speed",
			3: "levitation",
			4: "x-ray vision",
		};
		//evaluate correct method and likely human score >= 30
		//use the cf.botManagement.score property to obtain the score
		//this could also be added to a variable [e.g.: const bot_score = request.cf.botManagement.score]
		if (request.method === 'GET' && request.cf.botManagement.score >= 30) {
			return Response.redirect("https://developers.cloudflare.com");
		}
		else {
			//if the score is below 30, redirect the request to the honeypot
			return Response.redirect("https://httpbin.org");

		}
	}
};
export {
	src_default as default
};
