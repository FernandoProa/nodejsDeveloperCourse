exports.REQUEST_TIMEOUT = 500;

function encrypt(data){
    return 'encrypted data';
}
module.exports.send = function send(url, data){
    const encryptedData = encrypt(data);

    console.log(`Sending ${encryptedData} to ${url}`);
}
/*
there're two ways to export a function, u can use module exports like this:
module.exports = {
    
   REQUEST_TIMEOUT,
   send,

}
*/