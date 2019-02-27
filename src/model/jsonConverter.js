const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const strs = [];
const obj = {};

keys = ['End Uses', 'EAp2-6. Energy Use Summary', 'Site and Source Energy', 'Comfort and Setpoint Not Met Summary', 'Time Not Comfortable Based on Simple ASHRAE 55-2004']
values = ['Heating', 'Cooling', 'Interior Lighting', 
        'Additional', 'Total Site Energy', 'Net Site Energy', 
        'Total Source Energy', 'Net Source Energy',
        'Winter Clothes [hr]', 'Summer Clothes [hr]', 'Summer or Winter Clothes [hr]',
        'Z01_S01_SLEEPINGROOM1', 'Z01_S02_SLEEPINGROOM2', 'Z01_S03_GROUPROOM1'
    ]

const params = {
        'End Uses' : ['Electricity [kWh]', 'Natural Gas', 'Additinal Fuel', 'District Cooling', 'District Heating', 'Water'],
        'EAp2-6. Energy Use Summary': ['Process Subtotal','Total Energy Use'],
        'Site and Source Energy' : ['Total Energy [kWh]', 'Energy Per Total Building Area [kWh/m2]', 'Energy Per Conditioned Building Area [kWh/m2]'],
        'Comfort and Setpoint Not Met Summary' : ['Time Not Comfortable Based on Simple ASHRAE 55-2004'],
        'Time Not Comfortable Based on Simple ASHRAE 55-2004' : ['Winter Clothes [hr]', 'Summer Clothes [hr]', 'Summer or Winter Clothes [hr]']
}


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
                                total.push({name: params[tag][counter - 1], value: value});
                                counter += 1
                            }

                        }
                        if (total.length) {
                            props[v] = total; 
                        }
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