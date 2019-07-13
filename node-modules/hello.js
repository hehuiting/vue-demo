'use strict';

var s='hello';

function greet(name){
    console.log(s+','+name+'!');
}

function hi(name){
    console.log('Hi,'+name+'!');
}

function goodbye(name){
    console.log('goodbye,'+name+'!');
}

module.exports={
    greet:greet,
    hi:hi,
    goodbye:goodbye
};