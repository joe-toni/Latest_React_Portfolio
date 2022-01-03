import React, {useState} from "react";
import {Link} from "react-router-dom";
import Navigation from "./Navigation";

function Header()
{
    return (   

    <div className = "header-container">
        <div className = "title-container">
            <h1 className= "title">Jose Faburrieta</h1>
            <h2 className= "subtitle"> Multimedia Developer</h2>
        </div>
        <Navigation/>
    </div>
    )
}

export default Header;