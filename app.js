// const getNotes = require('./notes');
const chalk = require('chalk');
const { argv } = require('yargs');
const yargs = require('yargs');

// customize your yargs
yargs.version('1.1.0');

// add command
yargs.command({
    command: 'add',
    describe: 'add a new notes',
    builder:{
         title: {
             describe: 'note title',
             demandOption: true,
             type:'string'
         },
         body: {
             describe: 'note body',
             demandOption: true,
             type: 'string'
         }
    },
    handler: function (argv) {
        console.log('title:' + argv.title)
        console.log('body:' + argv.body)
    }
})
// remove command
yargs.command({
    command: 'remove',
    describe: 'remove a command',
    handler: function () {
        console.log('removing a command')
    }
})
// list command
yargs.command({
    command: 'list',
    describe: 'list a command',
    handler: function () {
        console.log('listing a command')
    }
})
// read command
yargs.command({
    command: 'read',
    describe: 'read a command',
    handler: function () {
        console.log('reading a command')
    }
})
// console.log(yargs.argv);
