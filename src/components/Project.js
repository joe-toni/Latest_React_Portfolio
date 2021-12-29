import React from "react";

function Project(props)
{
    return(
        <div className= "project-container">
            <img className= "image-container"  src = {props.Image}/>
            <p>{props.description}</p>
        </div>

    )
}

export default Project;