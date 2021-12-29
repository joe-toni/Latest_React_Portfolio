import React from "react";
import Project from "./Project"
import image from "../images/The_Tech_Blog_Original_Homescreen.png";

const description = "This is a sample description";

function Portfolio()
{
    return(
        <div className="portfolio-container">
            <Project Image = {image} description = {description}/>
        </div>
    )
}

export default Portfolio;