import React from "react"
import Header from "../components/header"

export default function About(){
    return(
        <div style={{color:'teal'}}>
            <Header text="this is a prop header"/>
            <h1>This is the About Page</h1>
            <p>All about us, baby</p>
        </div>
    );
}