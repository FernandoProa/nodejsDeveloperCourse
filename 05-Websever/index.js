const http = require('http');
const PORT = 3000;

const server = http.createServer();

const friends = [
    {
        id: 1,
        name: 'Fernando Proa'
    },
    {
        id: 2,
        name: 'Isaac Newton'
    },
    {
        id: 3,
        name: 'Nikola Tesla'
    }
];
server.on('request', (req, res) => {
    const items = req.url.split('/');

    if (items[1] === 'friends') {

        res.writeHead(200, {
            'Content-Type': 'text/plain',
        })
        if(items.length === 3){
            const friendIndex = parseInt(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }

    } else if (items[1] === 'message') {
        res.setHeader('Content-Type', 'text/plain')
        res.write('messages');
        res.end();
    }

});
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});