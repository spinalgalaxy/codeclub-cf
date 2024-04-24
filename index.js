// src/index.js
var src_default = {
  async fetch(request, env, ctx) {
    if(request.url == "https://www.cloudflareworkers.com/test") {
           return new Response('Hello worker!', {
               headers: {
                   'content-type': 'text/plain',
               },
           });
       }
       else{
           return new Response('Error Worker! Wrong URL', {
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
