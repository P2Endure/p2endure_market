
//import React from 'react';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
	
const strs = [];
const obj = {};
const obj2 = {};

JSDOM.fromFile("../upload/Warszawa_primary_validatedTable.html").then(dom => {
	dom.window.document.querySelectorAll('b, td').forEach(str => {
        strs.push(str.textContent)
    });

keys = ['Window-Wall Ratio']
values = ['Gross Wall Area [m2]'] 

    strs.forEach((str, i) => {
      if (keys.includes(str)) {
          console.log(str)
        obj[str] = [strs[i+1], strs[i+2], strs[i+3], strs[i+4], strs[i+5], strs[i+6], strs[i+7], strs[i+8], strs[i+9]];
        obj[str].filter(function('Window-Wall Ratio') {
          return keys.every(function(a) {
            return values.includes(e[a])
          })
      })
      }
    console.log(obj)
    console.log(obj2)
 
  });

  



})


/* const  a = ["some text"];
  obj2[str] = obj[str].filter(word => word.length > 100)

var found = array1.find(function(element) {
	return element;
  })

const k = a[0];
const obj = { k: [a[1], a[2], a[3]]};

export default ({}) => (
 <div>

 </div> */

