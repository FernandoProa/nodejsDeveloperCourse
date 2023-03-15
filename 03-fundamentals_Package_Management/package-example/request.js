const axios = require('axios');

axios.get('http://www.wikipedia.org')
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })
    .then(() => {
        console.log('all done!');
    });