
//import React from 'react';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
	
const strs = [];
const obj = {};
JSDOM.fromFile("../upload/Warszawa_primary_validatedTable.html").then(dom => {
	dom.window.document.querySelectorAll('td').forEach(str => {
        strs.push(str.textContent)
    });
keys = ['Heating', 'Cooling']
    strs.forEach((str, i) => {
      if (keys.includes(str)) {
          console.log(str)
        obj[str] = [strs[i+1], strs[i+2], strs[i+3], strs[i+4]];
      }
    })
    console.log(obj)
});



/* const  a = ["some text"];

var found = array1.find(function(element) {
	return element;
  })

const k = a[0];
const obj = { k: [a[1], a[2], a[3]]};

export default ({}) => (
 <div>

 </div> */

