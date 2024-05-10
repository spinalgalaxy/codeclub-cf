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

		if (request.method === 'GET' && request.cf.botManagement.score >= 30) {
			return Response.redirect("https://developers.cloudflare.com");
		}
		else {

			return Response.redirect("https://httpbin.org");

		}
	}
};
export {
	src_default as default
};
