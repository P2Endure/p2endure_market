import React, { Component } from 'react';
//import IdfConverter2 from './idfConverterAfter';
const values = ["GAP - MATERIAL GLASS", "GAP - MATERIAL FRAME", "GAP - CONSTRUCION"];

export default class IdfConverter extends React.Component{

constructor(props){
    super(props)
    this.state = {
        simulationRun: 1,
    }
    this.testBegin = this.testBegin.bind(this);
 }

 //getFile for new data exchange start
    
getFile  = (e) =>{
    fetch (`http://localhost:4000/upload`, {
        method: "GET"
    }).then(response => {
        return response.text()
    }).then(text => {
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
                let isMatch = this.testBegin(line, v);
                if (isMatch) {
                    //console.log("match ", i)
                    block[v].begin = i;
                    let counter = i + 1
                    while (true) {
                        let endLine = idf[counter];
                        if (this.testEnd(endLine)) {
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
        }}
        this.getFile_2();
        //idf.push(toRemoveAfter);
        //idf = idf.toString().replace(/(,\r\n|\n|\r\,)/gm,"\n");
        //console.log("IDF ");
        //this.storeFile(idf)
        //console.log(this.storeFile);
    }).catch(err => {
        console.log(err)
    })

};

storeFile (text) {
    fetch ("http://localhost:4000/upload", {
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
          body: JSON.stringify({text: text}),
          method: "POST"
        })
        .then(response => {
            response.json();
        }).then(txt => {
            //console.log('in storeFile', txt)
        }).catch(err => {
            //console.log('Error: ', err)
        })
}

testBegin (text, key) {
    var regex = new RegExp(`(^!).*${key}`);
    if (text.match(regex)) {
        return true;
    } else {

}} 

testEnd(text) {
    var regex = new RegExp(`(^!).*`)
    if (text.match(regex)) {
        return true;
    } else {
        return false;
}} 

getFile_2  = () =>{
    fetch (`http://localhost:4000/upload/add`, {
        method: "GET"
    }).then(response => {
        return response.text()
    }).then(text => {
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
                let isMatch = this.testBegin(line, v);
                if (isMatch) {
                    //console.log("match ", i)
                    block[v].begin = i;
                    let counter = i + 1
                    while (true) {
                        let endLine = idf[counter];
                        if (this.testEnd(endLine)) {
                            block[v].end = counter;
                            break;
                        }
                        counter++
                        }   
                    }
                })
            }

        }
        let toRemoveAfter = '';
         for (var key in block){
            if(block.hasOwnProperty(key)) {
                let b = block[key]
                    toRemoveAfter = idf.splice(b.begin, 94, b.end - b.begin);
                    toRemoveAfter = toRemoveAfter.toString().replace(/(,\r\n|\n|\r\,)/gm,"\n");
                    idf.push(toRemoveAfter);
        }
    }
    console.log({toRemoveAfter})
      idf = idf.toString().replace(/(,\r\n|\n|\r\,)/gm,"\n");
        this.storeFile(idf) 
    }).catch(err => {
        console.log('Error: ', err)
    })
};

testBegin_2 (text, key) {
    var regex = new RegExp(`(^!).*${key}`);
    if (text.match(regex)) {
        return true;
    } else {

}} 

testEnd_2(text) {
    var regex = new RegExp(`(^!).*`)
    if (text.match(regex)) {
        return true;
    } else {
        return false;
}} 
//getFile for new data exchange end
 
render(){
    return(  
      <div>
        <div className="start-simulation">
            <button className="action-Button_2" onClick={this.getFile}>Submit</button>
        </div>
    </div> 
    )}
}