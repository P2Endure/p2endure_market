const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const strs = [];
const obj = {};

keys = ['End Uses', 'Electric Loads Satisfied', 'Comfort and Setpoint Not Met Summary']
attributes = ['Electricity [kWh]', 'Natural Gas [kWh]', 'Natural Gas [kWh]2', 'Natural Gas [kWh]3', 'Natural Gas [kWh]4', 'Natural Gas [kWh]5']
values = ['Heating']       

JSDOM.fromFile("../upload/Warszawa_primary_validatedTable.html").then(dom => {
    dom.window.document.querySelectorAll('b, table').forEach(str => {
        strs.push(str.textContent)
    });

    strs.forEach( (tag, i) => {
        if (keys.includes(tag)) {
            let table = strs[i + 1];
            let rows = table.split("\n").filter(line => line.replace(/\s/g, '').length);
            let props = {};

            rows.forEach( (row, i) => {
                values.forEach( v => {
                  if (row.includes(v)) {
                      let total = [];
                      let counter = 1;
                      while (true) {
                          let value = parseFloat(rows[i + counter]);
                          if (isNaN(value)) {
                              break;
                          } else {
                            total += value;
                            counter += 1
                            }
                        }
                        props[v] = total;   
                    }  
                })
        })
            obj[tag] = props;
            var json = JSON.stringify(obj)
            var fs = require('fs');
            fs.writeFile('../upload/modelOutput.json', json, 'utf8');
        }
    })
console.log(obj)
})