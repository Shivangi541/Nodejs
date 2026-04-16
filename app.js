//require("./xyz");
//const { sum } = require("./sum");
//import { multiplynumbers } from "./multiply.js";
// package .json is needed for es module syntax and also we need to use .js extension in import statement
import { sum, multiplynumbers } from "./calculate/index.js";
import data from "./data.json" with { type: "json" }; // assert is not suppported in node version  22
console.log(data);
// way number 2: import data from "./data.js"
// way number 3: import {data} from "./data.js" and export data in data.js file as export const data = {name : "kiit", age : 22}
// es module syntax: import {sum} from "./sum.js"
// also keep a package.json file , syntax {""type" : "module"}
var a = 10;
var b = 20;
sum(a, b);
multiplynumbers(a, b);
var x = 100;
console.log(x);
console.log(global);
//console.log(this); prints empty object
console.log(globalThis);
