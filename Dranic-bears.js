const fs = require("fs").promises;

const argv = process.argv[2];

const readline = require("readline");

class Themes {
createPromisesArray(path) {
let arr = [];
const read = fs
.readFile(path, "utf-8", (data, err) => {})
.then((res) => (arr = res.split("\n")))
.catch(console.error);

setTimeout(() => 1000);

// console.log(arr);
}