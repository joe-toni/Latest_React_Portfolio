import React from "react";

export default  function Resume() 
{
    return(
        <div className="basic-container">
            <h2>Proficiencies</h2>
            <div className="resume-container">
                <p>Download my <a href = "https://drive.google.com/file/d/1SJ3V4-3JsyY0rrnUR75cEUkWD-ZRSSej/view?usp=sharing" target="_blank">resume</a>.</p>
                <div className="list-container">
                    <h4>Front End Proficiencies</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                    </ul>
                    <h4>Back End Proficiencies</h4>
                    <ul>
                        <li>JavaScript</li>
                        <li>mongo/mongoose</li>
                        <li>SQL</li>
                        <li>Sequilize</li>
                    </ul>
                    </div>
            </div>

        </div>
    )
}