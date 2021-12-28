import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Navigation()
{
    return(
        <nav className = "Navigation-container">
           <Link to= "/aboutMe" className="nav-links">About Me</Link>
           <Link to= "/portfolio" className="nav-links">Portfolio</Link> 
           <Link to= "/contact" className="nav-links">Contact</Link>
           <Link to= "/resume" className="nav-links">Resume</Link>
        </nav>
    )
}

export default Navigation;