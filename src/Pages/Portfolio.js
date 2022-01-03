import React, {useState} from "react";
import Project from "../components/Project"

//We Start by bringing in the images that we will use for our portfolio
import Pillar from "../images/The_Art_Pillar_Personal_Copy_Screenshot.png";
import Blog from "../images/The_Tech_Blog_Original_Homescreen.png";
import Travel from "../images/There_And_Back_Original_Screenshot.png";
import Weather from "../images/Weather_Dashboard_Original_Screenshot.png";
import Scheduler from "../images/Work_Day_Scheduler_Original_Screenshot.png";
import Workout from "../images/Workout_Tracker_Main_Page.png"

//Here we are setting up object that will contain information about each project in our portfolio
const pillarProject = 
{
    name: "The Art Pillar",
    image: Pillar,
    description: "This project was a collaborative attempt at creating a site that allowed registered users to submit images " + 
     "to a central hub that would then display them along side others as if the viewer were visiting a gallery or museum " +
     "It used images brought in from a museum api to initially populate the slides of the site. For more information feel free to visit the sites below.",
    github: "https://github.com/joe-toni/pillarArtApplication",
    deploy: "https://personal-pillar-application.herokuapp.com/"
};

const blogProject = 
{
    name: "The Tech Blog",
    image: Blog,
    description: "This assingment was my first commplete full stack application that employeed an MVC framework " + 
    "to  produce a basic blog posting site, users of this site with created accounts able to post blogs, and comments that " +
    "were persisted through being stored in a database that would present all saved instances to be dislayed from a central page. For more infomation feel free to visit the sites below.",
    github: "https://github.com/joe-toni/S14-HW-TECH-BLOG",
    deploy: "https://s14-hw-tech-blog.herokuapp.com/"
};

const travelProject = 
{
    name: "There And Back",
    image: Travel,
    description: "This project was a collaborative work that was aimed at creating an app that would assist a user " +
    "in planning potential road trips by providing weather infomation along a route and a planner tool for keeping " +
    "track of tasks that needed to be done before, during and after the trip. For more information feel free to visit the sites below.",
    github: "https://github.com/joe-toni/thereandback",
    deploy: "https://joe-toni.github.io/thereandback/"
};

const weatherProject = 
{
    name: "Weather Dash Board",
    image: Weather,
    description: "This app was an assignment that would allow a user to save notes on planned activities though out " +
    "the day It would correctly determine the time of day to color code which segments were either past, present, or future. " +
    "The app was also able to persist user entries through site reloads. For more information feel free to visit the sites below.",
    github:  "https://github.com/joe-toni/S5-HW-WORK-DAY-PLANNER" ,
    deploy: "https://joe-toni.github.io/S5-HW-WORK-DAY-PLANNER/" 
};

const schedulerProject = 
{
    name: "Daily Planner",
    image: Scheduler,
    description: "This app was an assignment that would allow the user to perform a very basic location search by name " +
    "in order to get and display the weather for said location. It would display the current conditions as well as a slightly " +
    "simpler 5 day forcast. It would also persist search user search history and display it in a scrollable div. For more information feel free to visit the links below",
    github: "https://github.com/joe-toni/S6-HW-WEATHER-DASHBOARD",
    deploy: "https://joe-toni.github.io/S6-HW-WEATHER-DASHBOARD/"
}

const workoutProject = 
{
    name: "Fitness Tracker",
    image: Workout,
    description: "This app was an assignment that would allow for a single user to record exercises over a series of days. " +
    "It uses mongo as the database and mongoose to create the models. For more information on this project feel free to visit the link below.",
    github: "https://github.com/joe-toni/Workout_Tracker",
    deploy: "https://s18-workout-tracker.herokuapp.com/?id=61c46b9893f502001603cf8e"
}

function Portfolio()
{
    //Here we establish two use state variables one to track whether the page is currently viewing the entire portfolio or a single project, and one to keep track
    //of which project the user is trying to look at.
    const [portfolio, viewPortfolio] = useState(true);
    const [view, setView] = useState({});

    //This functions changes the two previous use state variables to signal that we are now looking at a specific project based on which one was clicked on.
    const updateView = (project) => 
    {
        viewPortfolio(false);
        setView(project);
    };
    

    //This component renders several segments containing thumbnails of each project. when one of the thumbnails is clicked a corresponding project object 
    //is passed into the project component to be rendured while the view state is adjusted to change the rendured content a view of all projects to a view of the specified project
    return(
        <div className="basic-container">
            {portfolio
                ?
                    <div className="portfolio-container">
                        <h2>Portfolio</h2>
                        <div className = "portfolioView">
                            <div className="segment">
                                <div  className="thumbnail" onClick = {() => updateView(pillarProject)}>
                                    <img src = {Pillar} className="projectImg" alt = "Pillar Project"/>
                                    <h3 className="projectTitle">The Pillar Art Gallary</h3> 
                                </div>
                            </div>
                            <div className="segment">
                                <div  className="thumbnail" onClick = {() => updateView(blogProject)}>
                                    <img src = {Blog} className="projectImg" alt = "Blog Project"/>
                                    <h3 className="projectTitle">The Tech Blog</h3> 
                                </div>
                            </div>
                            <div className="segment">
                                <div  className="thumbnail" onClick = {() => updateView(travelProject)}>
                                    <img src = {Travel} className="projectImg" alt = "Travel Project"/>
                                    <h3 className="projectTitle">There And Back Again</h3> 
                                </div>
                            </div>
                            <div className="segment">
                                <div  className="thumbnail" onClick = {() => updateView(weatherProject)}>
                                    <img src = {Weather} className="projectImg" alt = "Weather Project"/>
                                    <h3 className="projectTitle">The Weather Dashboard</h3> 
                                </div>
                            </div>
                            <div className="segment">
                                <div  className="thumbnail" onClick = {() => updateView(schedulerProject)}>
                                    <img src = {Scheduler} className="projectImg" alt = "Scheduler Project"/>
                                    <h3 className="projectTitle">Daily Planner</h3> 
                                </div>
                            </div>
                            <div className="segment">
                                <div  className="thumbnail" onClick = {() => updateView(workoutProject)}>
                                    <img src = {Workout} className="projectImg" alt = "Workout Project"/>
                                    <h3 className="projectTitle">Workout Tracker</h3> 
                                </div>
                            </div>
                        </div>
                    </div>
                :
                    <div className = "projectView">
                        <button className = "mainViewBtn" onClick = {() => viewPortfolio(true)}>X</button>
                        <Project name = {view.name} image =  {view.image} description = {view.description} github = {view.github} deploy = {view.deploy}/>
                    </div>
            } 
        </div>
    )
}

export default Portfolio;