import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Navigation()
{
    const [aboutMe, selectAboutMe] = useState(true);
    const [portfolio, selectPortfolio] = useState(false);
    const [contact, selectContact] = useState(false);
    const[resume, selectResume] = useState(false);

    const setCurrent = (current) =>
    {
        if (current === "/aboutMe")
            {
                selectAboutMe(true);
                selectPortfolio(false);
                selectContact(false);
                selectResume(false);
            }
        else if (current === "/portfolio")
            {
                selectAboutMe(false);
                selectPortfolio(true);
                selectContact(false);
                selectResume(false);
            }
        else if (current === "/contact")
            {
                selectAboutMe(false);
                selectPortfolio(false);
                selectContact(true);
                selectResume(false);
            }
        else if (current === "/resume")
            {
                selectAboutMe(false);
                selectPortfolio(false);
                selectContact(false);
                selectResume(true);
            }
    }

    useEffect(() => {
        const current = window.location.pathname
        setCurrent(current);
      },[]);

    return(
        <nav className = "Navigation-container">
           <Link to= "/aboutMe" className={aboutMe? "current" : "standby"} onClick = {() => setCurrent("/aboutMe")}>About Me</Link>
           <Link to= "/portfolio" className={portfolio? "current" : "standby"}  onClick = {() => setCurrent("/portfolio")}>Portfolio</Link> 
           <Link to= "/contact" className={contact? "current" : "standby"}  onClick = {() => setCurrent("/contact")}>Contact</Link>
           <Link to= "/resume" className={resume? "current" : "standby"}  onClick = {() => setCurrent("/resume")}>Resume</Link>
        </nav>
    )
}

export default Navigation;