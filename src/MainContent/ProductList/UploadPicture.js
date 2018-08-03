import React from 'react';
import axios from 'axios';


export default class UploadPicture extends React.Component{

    state ={
        selectedFile: null
    }

    fileSelectedHandler = event =>{
        console.log(event.target.files[0]);
    }

    fileUploadHandler = () =>{
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('',fd, {
            onUploadProgress: ProgressEvent => {
                console.log('Upload progrss: ' + Math.round(ProgressEvent.loaded/ProgressEvent.total * 100) + '%')
            }
        })
            .then(res => {
                console.log(res);
            });
    }

    render(){
        return(
            <div>
                <input 
                    type="file" 
                    onChange={this.fileSelectedHandler}
                />
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>    
    )}
}    