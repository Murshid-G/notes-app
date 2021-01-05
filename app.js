// const getNotes = require('./notes');
const command = process.argv[1]
console.log(process.argv);
if(command === 'add'){
    console.log('added');
}else if (command === 'remove'){
    console.log('remove')
}
