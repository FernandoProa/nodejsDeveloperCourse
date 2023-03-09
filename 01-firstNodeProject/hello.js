const mission = process.argv[2];
 // process.argv[2] uses the argument with the "2" index in a arra, for example:
 // we can execute this file like a: node ./hello.js explore
 // so the [2] index is "explore" 
if(mission === 'learn'){
    console.log('time to write some node code');
} else {
    console.log(`Is ${mission} really more fun?`);
}
