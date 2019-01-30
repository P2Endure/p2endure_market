const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const strs = [];
const obj = {};

keys = ['Window-Wall Ratio']
values = ['Gross Wall Area [m2]', "Above Ground Wall Area [m2]"]

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
                              total.push(value);
                              counter += 1
                            }

                        }
                        props[v] = total; 
                    }
                })       
            })
            obj[tag] = props;
        }
    })
console.log(obj)
})
