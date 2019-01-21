import React from 'react';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
	
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent);

JSDOM.fromFile("./src/upload/Warszawa_primary_validatedTable.html", options).then(dom => {
	console.log(dom.serialize());
  });

const  a = ["some text"];

var found = array1.find(function(element) {
	return element;
  })

const k = a[0];
const obj = { k: [a[1], a[2], a[3]]};

export default ({}) => (
 <div>

 </div>
)




