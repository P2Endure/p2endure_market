import React, { Component } from 'react';

export default class Uploader extends React.Component{
    render(){
        <form ref='uploadForm' 
        id='uploadForm' 
        action='http://localhost:8000/upload' 
        method='post' 
        encType="multipart/form-data">
          <input type="file" name="sampleFile" />
          <input type='submit' value='Upload!' />
      </form>    
    }
}