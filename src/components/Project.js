import React from "react";

function Project(props)
{
    return(
        <div className= "project-container">
            <img className= "image-container"  src = {props.image}/>
            <p>{props.description}</p>
            <a href = {props.github} target = "_blank">GitHub</a>
            <a href = {props.deploy} target = "_blank">Live Site</a>
        </div>

    )
}

export default Project;