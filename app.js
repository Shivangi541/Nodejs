import { sum, multiplynumbers } from "./calculate/index.js";
import data from "./data.json" with { type: "json" };
console.log(data);

var a = 10;
var b = 20;
sum(a, b);
multiplynumbers(a, b);
var x = 100;
console.log(x);
console.log(global);
console.log(globalThis);
