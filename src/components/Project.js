import React from "react";

//This project component takes in props to conditionally render information about the project being viewed, including its name,
//an image, a description, and links to both a corresponding github repository and a deployed live site.
function Project(props)
{
    return(
        <div className= "basic-container">
            <h2>{props.name}</h2>
            <img className= "image-container"  src = {props.image} alt = "Project Screenshot"/>
            <p>{props.description}
            <div className="linkContainer">
                <a href = {props.github} target = "_blank" rel = "noreferrer">GitHub</a>
                <a href = {props.deploy} target = "_blank" rel = "noreferrer">Live Site</a>
            </div>
            </p>
        </div>

    )
}

export default Project;