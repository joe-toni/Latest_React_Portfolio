import React from "react";

function Project(props)
{
    return(
        <div className= "basic-container">
            <img className= "image-container"  src = {props.image}/>
            <p>{props.description}
            <div className="linkContainer">
                <a href = {props.github} target = "_blank">GitHub</a>
                <a href = {props.deploy} target = "_blank">Live Site</a>
            </div>
            </p>
        </div>

    )
}

export default Project;