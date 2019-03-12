//idfConverterBefore,js where I want to import the toRemoveAfter value

const getDataText = require('./idfConverterAfter.js')
const string = getDataText();
const fs = require('fs');
const key = /!\s+(\=+\s+?GAP - MATERIAL GLASS\s+=+)\s+!/g;
const end = /!/g;
  
values = ["GAP - MATERIAL GLASS", "GAP - MATERIAL FRAME", "GAP - CONSTRUCION"];

var text = fs.readFile('../upload/Warszawa_primary_validated.idf', function(err, text) {
    if (err) {
        throw err;
    }
    let idf = text.toString().split("\n");
    var lines_n = idf.length;
    let block = {};
    values.forEach(v => { 
        block[v] = {};
    })
    for (let i = 0; i <= lines_n; i++) {
        let line = idf[i];
        if (line) {
            values.forEach( (v) => {
            let isMatch = testBegin(line, v);
            if (isMatch) {
                //console.log("match ", i)
                block[v].begin = i;
                let counter = i + 1
                while (true) {
                    let endLine = idf[counter];
                    if (testEnd(endLine)) {
                        block[v].end = counter;
                        break;
                    }
                    counter++
                    }   
                }
            })
        }
    }
    for (var key in block){
        if(block.hasOwnProperty(key)) {
            let b = block[key]
                var toRemoveOriginal = idf.splice(b.begin, 94, b.end - b.begin);
                toRemoveOriginal = toRemoveOriginal.toString().replace(/(,\r\n|\n|\r\,)/gm,"\n");
                //console.log(toRemoveAfter);
            
        }}
    //let toRemoveOriginal = idf.splice(block.begin, block.end - block.begin); // an array of lines to remove/replace, it has been removed from idf
    //toRemoveOriginal = toRemoveOriginal.toString().replace(/(\r\n|\n|\r)/gm,"\n");
    idf.push(string);
    idf = idf.toString().replace(/(,\r\n|\n|\r\,)/gm,"\n");
    var fs = require('fs');
    fs.writeFile('../upload/modelOutput_test_3.idf', idf, 'utf8', function(e){
        console.log("done"); 
    }
    ); 

});

function testBegin(text, key) {
    var regex = new RegExp(`(^!).*${key}`);
    if (text.match(regex)) {
        return true;
    } else {
        return false;
    }
    //^!\W*((?i)GAP - MATERIAL GLASS(?-i))\W*
}

function testEnd(text) {
    var regex = new RegExp(`(^!).*`)
    if (text.match(regex)) {
        return true;
    } else {
        return false;
    }
    //^!\W*((?i)GAP - MATERIAL GLASS(?-i))\W*
}

