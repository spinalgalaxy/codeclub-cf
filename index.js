// src/index.js
var src_default = {
	async fetch(request, env, ctx, options) {
		if (request.method === 'GET') {
			return new Response(JSON.stringify({ message: 'This is a GET request' }), {
				headers: {
					'content-type': 'application/json',
				},
			});
		}
		else {

			return Response.json({ message: "ERROR! Wrong Method!!" });

		}
	}
};
export {
	src_default as default
};
//# sourceMappingURL=index.js.map
