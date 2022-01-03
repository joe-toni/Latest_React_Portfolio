import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";


//This is the Navigation component and it will be used on all the pages and contains links to each page with conditional highlighting on the selected link
function Navigation()
{
    //Here we set up four use states with boolean values to help track which of the nav links is currently active, since the home page starts on the
    // about me page the state starts as true unlike the others wich are adjusted as selections are made.
    const [aboutMe, selectAboutMe] = useState(true);
    const [portfolio, selectPortfolio] = useState(false);
    const [contact, selectContact] = useState(false);
    const[resume, selectResume] = useState(false);

    //This function takes in a string value that determines which page is currently being viewed and adjusts the boolean value of the use states
    // to correctly represent which is the current selection and deselect any of the inactive links
    const setCurrent = (current) =>
    {
        selectAboutMe(false);
        selectPortfolio(false);
        selectContact(false);
        selectResume(false);
        if (current === "/aboutMe")
            {selectAboutMe(true);}
        else if (current === "/portfolio")
            {selectPortfolio(true); }
        else if (current === "/contact")
            {selectContact(true);}
        else if (current === "/resume")
            {selectResume(true);}
        else
            {selectAboutMe(true);}
    }

    //This useEffect is used to check the current page and adjust the active link based on the path name everytime the page remounts, it is meant
    //to correctly adjust the default highlighted link incase the user refreshes on a page that is not the about me.
   useEffect(() => {
        const location = window.location.href;
        if (location.includes("/aboutMe"))
            {setCurrent("/aboutMe")}
        else if (location.includes("/portfolio"))
            {setCurrent("/portfolio")}
        else if (location.includes("/contact"))
            {setCurrent("/contact")}
        else if (location.includes("/resume"))
            {setCurrent("/resume")}
      },[]);

    //The nav component returns a div with links to each page and uses conditional rendering to add a current class name to the selected link adjusting its 
    //styling to better signal which page is being currently viewed.
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