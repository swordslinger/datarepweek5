import React from 'react';
import '../App.css'

export class Content extends React.Component{

    render(){
        return(

            <div className = "App">
                <h1>Hello World</h1>
                <h2>It Is {new Date().toLocaleTimeString()}. </h2>
            </div>
            
        )
    }
}