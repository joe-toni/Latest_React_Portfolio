import React from "react";
import photo from "../images/smaller-profile-pic.jpg";

function About() 
{
    return (
        <div className = "aboutMe-container">
            <h2>About Me</h2>           
            <img src = {photo} alt = "Profile Picture"/>
            <p className = "aboutMe">
               My name is J.A. Faburrieta and am currently working on becoming a web developer.
               Experience with the subject is thin but it has been one of my favorite practices ever
               since college.  Along with progaming I enjoy sculpting and writing in my free time and 
               the hope is that I will be able to combine these passions in a programing format. 
            </p>                
        </div>
    )
}

export default About;