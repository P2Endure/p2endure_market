'use strict';


var fs = require('fs');

fs.readFile('../../model/data/ProductData/Window.json', 'utf-8' ,function(err, buf) {
    console.log(buf.toString());
});


var data = "New File Contents";

fs.writeFileSync('../../model/data/ProductData/Window_2.json', data, function(err, data){
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});