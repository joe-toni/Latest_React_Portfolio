import React from "react";
import {Link} from "react-router-dom";
import Navigation from "./Navigation";

function Header()
{
    return (   

    <div className = "header-container">
        <Link to= "/" className = "title-container">
            <h1 className= "title">Jose Faburrieta</h1>
            <h2 className= "subtitle"> Multimedia Developer</h2>
        </Link>
        <Navigation/>
    </div>
    )
}

export default Header;