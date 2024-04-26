// src/index.js
var src_default = {
	async fetch(request, env, ctx, options)
									{
	  if(request.method === 'POST' ) {
			 //return new Response('Hello worker!'
			 //^^old plain text response
			 //New JSON response below using JSON.stringify
			 return new Response(JSON.stringify({message: 'This is a POST request'}), {
				 headers: {
					 'content-type': 'application/json',
				 },
			 });
		 }
		 else{
			//anything other than a POST method will receive this message in JSON format
			//using the .json() method. It's a simpler way to return a value in JSON format
			return Response.json({message: "ERROR! Wrong Method!!"});
			
		}
	}
  };
  export {
	src_default as default
  };
  //# sourceMappingURL=index.js.map
