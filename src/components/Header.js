import React from "react";
import Navigation from "./Navigation";

//This is the Header funtion That is meant to house the title of the page as well as the nav component. It will
//Be used on all the pages as is.
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