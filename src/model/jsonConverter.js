const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("td").textContent); // "Hello world"

//JavaScript to Json
//Loop with JavaScript from one text part to another and grap the values and sort them to the key

const a = ["Total Site Energy", "...", "..."]
const k = a[0];
const obj = { k: [a[1], a[2], a[3]]};