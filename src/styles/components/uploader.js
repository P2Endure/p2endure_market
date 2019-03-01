import React, { Component } from 'react';

export default class Uploader extends React.Component{

constructor(props){
    super(props)
    this.state = {filename: null}
    }  
    
    uploadFile = (e) => {
        let f = e.target.files[0]
        let form = new FormData()
        form.append("file", f) 
        fetch ("http://localhost:4000/upload", {
          body: form,
          method: "POST"
        }).then(response => response.json())
          .then(result => {
            console.log(result)
            this.setState({
            
              filename: result.name
            })
      
          })
          console.log("Test");
      }
      
      startEnergyPlus = (e) =>{
        fetch (`http://localhost:4000/express_backend/${this.state.filename}`, {
          method: "GET"
        })
      }
      
render(){
    return(  
        <div className="upload-action">
          <label htmlFor="file-upload" className="action-Button" onChange={this.uploadFile}>
             Upload File
          </label>
          <input id="file-upload" type="file"  />
          <div className="start-simulation">
            <button className="action-Button" onClick={this.startEnergyPlus}>Start Simulation</button>
          </div>
        </div>  
    )}
}