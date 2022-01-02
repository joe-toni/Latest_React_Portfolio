import React from "react";
import photo from "../images/smaller-profile-pic.jpg";

function About() 
{
    return (
        <div className = "basic-container">
            <h2>About Me</h2>           
            <img src = {photo} alt = "Profile"/>
            <p>
            Full stack web developer in training, working on completing the UC Davis coding bootcamp. Recently acquired entry 
            level skills for creating applications that follow the MVC architecture, and the MERN framework. Hoping to apply a 
            background in studio arts and computer science to generate highly dynamic applications with an aesthetically pleasing, 
            and engaging user friendly interface. Highly dedicated individual with a willingness to dive headfirst into new projects 
            as well as a desire to retread and improve upon previous works for the sake of expanding experience and sharpening skill sets. 
            Greatly eager to grow in all aspects of the practice from clearer communication skills when working in teams, to increased efficiency 
            and resourcefulness when picking up new technologies.
            </p>                
        </div>
    )
}

export default About;