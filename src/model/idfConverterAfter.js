//idfConverterAfter,js with the toRemoveAfter value, which I want to export
const fs = require('fs');

const key = /!\s+(\=+\s+?GAP - MATERIAL GLASS\s+=+)\s+!/g;
const end = /!/g;

values = ['Material:NoMass'];
module.exports = {
 text : fs.readFile('../upload/Warszawa_phase2_bgtec_summermode.expidf', function(err, text) {
    if (err) {
        throw err;
    }
    /* console.log("Material:NoMass: ", getValueByKey(text, "Material:NoMass"));  */
    const idf = text.toString().split("\n");
    var lines_n = idf.length;
    let block = {};
    for (let i = 0; i <= lines_n; i++) {
        let line = idf[i];
        if (line) {
            let isMatch = testBegin(line, "GAP - MATERIAL GLASS");

            if (isMatch) {
                //console.log("match ", i)
                block.begin = i;
                let counter = i + 1
                while (true) {
                    let endLine = idf[counter];
                    if (testEnd(endLine)) {
                        block.end = counter;
                        break;
                    }
                    counter++
                }
            }
        }
    };
    var toRemoveAfter = idf.splice(block.begin, block.end - block.begin); // an array of lines to remove/replace, it has been removed from idf
    toRemoveAfter = toRemoveAfter.toString().replace(/(,\r\n|\n|\r\,)/gm,"\n");  
    //console.log(toRemoveAfter);
})};


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




