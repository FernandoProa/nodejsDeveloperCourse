//const {send} = require('./request');
//const {read} = require('./response');
const internals = require('./internals');
function makeRequest(url, data){
    internals.request.send(url, data);
    return internals.response.read();
    
}

const responseData = makeRequest('https://www.google.com','hello');
console.log(responseData);