// Core module->>>>>>
/*
consider modules to be the same as js librarie .A set of function you wan tot incluse in your application 
Nodejs has a set of built in modules which you can use withous installations 




*/
const fs = require("fs");
// fs.writeFileSync("new.txt", "kajhsdfkajhf");
// fs.appendFileSync("new.txt", "agagagagagag");

const buf_data = fs.readFileSync("Basic/new.txt");
// buffer  ismaiknly used ot store binary data
console.log(buf_data.toString());
