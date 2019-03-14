import React, { Component } from 'react';
import IdfConverter2 from './idfConverterAfter';
//const getDataText = require('./idfConverterAfter.js')
//const string = getDataText();
//values = ["GAP - MATERIAL GLASS", "GAP - MATERIAL FRAME", "GAP - CONSTRUCION"];

export default class IdfConverter extends React.Component{

constructor(props){
    super(props)
    this.state = {
        values: ["GAP - MATERIAL GLASS", "GAP - MATERIAL FRAME", "GAP - CONSTRUCION"], 
    }
    this.testBegin = this.testBegin.bind(this);
 }  
    
getFile  = (e) =>{
    fetch (`http://localhost:4000/upload`, {
        method: "GET"
    }).then(response => {
        return response.text()
    }).then(text => {
        let idf = text.toString().split("\n");
        var lines_n = idf.length;
        let block = {};
        this.state.values.forEach(v => { 
            block[v] = {};
        })
        for (let i = 0; i <= lines_n; i++) {
            let line = idf[i];
            if (line) {
                this.state.values.forEach( (v) => {
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
                    //console.log(toRemoveOriginal);
                
        }} 
        //idf.push(this.state.toRemoveAfter);
        idf = idf.toString().replace(/(,\r\n|\n|\r\,)/gm,"\n");
        console.log(idf);
        this.storeFile(idf)
        console.log(this.storeFile);
    }).catch(err => {
        console.log(err);
    })

};

storeFile (text) {
    console.log("Festch", text);
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
            console.log('txt: ', txt)
        }).catch(err => {
            console.log('Error: ', err)
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
      
render(){
    return(  
      <div>
        <div className="start-simulation">
            <button className="action-Button" onClick={this.getFile}>Resimulation</button>
        </div>
    </div> 
    )}
}