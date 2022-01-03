import React from "react";

//This react component will contain the page corresponding to the portfolio page, it rendurs a list of proficiencies along with a link to a downloadable resume.
function Resume() 
{
    return(
        <div className="basic-container">
            <h2>Proficiencies</h2>
            <div className="resume-container">
                <p>Download my <a href = "https://drive.google.com/file/d/1SJ3V4-3JsyY0rrnUR75cEUkWD-ZRSSej/view?usp=sharing" target="_blank" rel = "noreferrer">resume</a>.</p>
                <div className="list-container">
                    <div>
                        <h4>Front End Proficiencies</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div>
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
         </div>
    )
}

export default Resume;