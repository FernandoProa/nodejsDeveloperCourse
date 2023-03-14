// Observers patterns -- The node event emitter
const EventEmitter = require('events');
const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1

celebrity.on('race win', () => {
    console.log('Congratulations! you are the best');
});

// Subscribe to celebrity for Observer 2

celebrity.on('race win', () => {
    console.log('Boo I could have better than that!');
});

// code = 0 equals to a successfull execution
process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
})

celebrity.on('race', (result) => {
    if(result === 'win'){
        console.log('Congratulations! you are the best');
    }
})
celebrity.emit('race','win');
celebrity.emit('race','lost');
