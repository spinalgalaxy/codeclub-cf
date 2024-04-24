// src/index.js
var src_default = {
	async fetch(request, env, ctx, options)
									{
	  if(request.method === 'POST' ) {
			 //return new Response('Hello worker!'
			 //^^old plain text response
			 //New JSON response below
			 return new Response(JSON.stringify({message: 'This is a POST request'}), {
				 headers: {
					 'content-type': 'application/json',
				 },
			 });
		 }
		 else{
			//anything other than a POST method will receive this message in plain text
			 return new Response('Error Worker! Wrong Method!', {
				 headers: {
					 'content-type': 'text/plain',
				 },
			 });
		 }
	}
  };
  export {
	src_default as default
  };
  //# sourceMappingURL=index.js.map
