import React, {useEffect, useState} from "react";
import Project from "./Project"

import Pillar from "../images/The_Art_Pillar_Personal_Copy_Screenshot.png";
import Blog from "../images/The_Tech_Blog_Original_Homescreen.png";
import Travel from "../images/There_And_Back_Original_Screenshot.png";
import Weather from "../images/Weather_Dashboard_Original_Screenshot.png";
import Scheduler from "../images/Work_Day_Scheduler_Original_Screenshot.png";

const pillarProject = 
{
    image: Pillar,
    description: "This project was a collaborative attempt at creating a site that allowed registered users to submit images " + 
     "to a central hub that would then display them along side others as if the viewer were visiting a gallery or museum " +
     "It used images brought in from a museum api to initially populate the slides of the site. For more information feel free to visit the sites below.",
    github: "https://github.com/joe-toni/pillarArtApplication",
    deploy: "https://personal-pillar-application.herokuapp.com/"
};

const blogProject = 
{
    image: Blog,
    description: "This assingment was my first commplete full stack application that employeed an MVC framework " + 
    "to  produce a basic blog posting site, users of this site with created accounts able to post blogs, and comments that " +
    "were persisted through being stored in a database that would present all saved instances to be dislayed from a central page.",
    github: "https://github.com/joe-toni/S14-HW-TECH-BLOG",
    deploy: "https://s14-hw-tech-blog.herokuapp.com/"
};

const travelProject = 
{
    image: Travel,
    description: "This project was a collaborative work that was aimed at creating an app that would assist a user " +
    "in planning potential road trips by providing weather infomation along a route and a planner tool for keeping " +
    "track of tasks that needed to be done before, during and after the trip.",
    github: "https://github.com/joe-toni/thereandback",
    deploy: "https://joe-toni.github.io/thereandback/"
};

const weatherProject = 
{
    image: Weather,
    description: "This app was an assignment that would allow a user to save notes on planned activities though out " +
    "the day It would correctly determine the time of day to color code which segments were either past, present, or future. " +
    "The app was also able to persist user entries through site reloads.",
    github:  "https://github.com/joe-toni/S5-HW-WORK-DAY-PLANNER" ,
    deploy: "https://joe-toni.github.io/S5-HW-WORK-DAY-PLANNER/" 
};

const schedulerProject = 
{
    image: Scheduler,
    description: "This app was an assignment that would allow the user to perform a very basic location search by name " +
    "in order to get and display the weather for said location. It would display the current conditions as well as a slightly " +
    "simpler 5 day forcast. It would also persist search user search history and display it in a scrollable div. ",
    github: "https://github.com/joe-toni/S6-HW-WEATHER-DASHBOARD",
    deploy: "https://joe-toni.github.io/S6-HW-WEATHER-DASHBOARD/"
}

function Portfolio()
{
    const [main, setDisplay] = useState(true);
    const [view, setView] = useState({});

    const updateView = (project) => 
    {
        setDisplay(false);
        setView(project);
    };
    
    return(
        <div className="portfolio-container">
            {main
                ?
                    <div className = "mainView">
                        <img className="thumbnail" src = {Pillar} onClick = {() => updateView(pillarProject)}/>
                        <img className="thumbnail" src = {Blog} onClick = {() => updateView(blogProject)}/>
                        <img className="thumbnail" src = {Travel} onClick = {() => updateView(travelProject)}/>
                        <img className="thumbnail" src = {Weather} onClick = {() => updateView(weatherProject)}/>
                        <img className="thumbnail" src = {Scheduler} onClick = {() => updateView(schedulerProject)}/>
                    </div>
                :
                    <div className = "projectView">
                        <button className = "mainViewBtn" onClick = {() => setDisplay(true)}>Close</button>
                        <Project image =  {view.image} description = {view.description} github = {view.github} deploy = {view.deploy}/>
                    </div>
            } 
        </div>
    )
}

export default Portfolio;