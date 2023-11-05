import React from "react";
import Project from "./Project";
import CodingAssessment from "../images/Coding Asseessment.gif";
import NoteTaker from "../images/11-express-homework-demo-02.png";
import WeatherDashboard from "../images/Final_look.png";
import WorkDayPlanner from  "../images/Untitled_ Apr 30, 2023 9_16 PM.gif";
import '../style/Portfolio.css';

// Portfolio component
function Portfolio() {
    return (
          // Portfolio container
      <div className="portfolio-wrapper">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="container">
          <div className="row">
          {[
            {
              title:"Coding Asseessment",
              description:"Coding quize",
              imgSrc:CodingAssessment,
              deployedLink:" https://sunny9810.github.io/Coding-Quiz/",
              githubLink:"https://github.com/Sunny9810/Coding-Quiz/"
            },
            {
                title:"NoteTaker",
                description:"Using express.js creating Note Taker",
                imgSrc:NoteTaker,
                githubLink:"https://github.com/Sunny9810/Note-Taker"
            },

            {
                title:"WeatherDashboard",
                description:"OpenWeatherMap APIs",
                imgSrc:WeatherDashboard,
                deployedLink:"https://sunny9810.github.io/Weather-Dashboard/",
                githubLink:"https://github.com/Sunny9810/Weather-Dashboard/"

            },
            {
                title:"WorkDayPlanner",
                description:"Third-Party API Sceduler ft. Day.js",
                imgSrc:WorkDayPlanner,
                deployedLink:"https://sunny9810.github.io/Calendar-Event-Palnner/",
                githubLink:"https://github.com/Sunny9810/Calendar-Event-Palnner"

            },

        ].map((project, index) => (
            // Div container for each project
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              {/* <h2>{project.title}</h2> */}
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Export Portfolio
export default Portfolio;




