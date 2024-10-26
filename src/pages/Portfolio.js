import React from "react";
import "../styles/Portfolio.css"; // Import the CSS file
import portfolio from "../assets/portfolio.png";

const Portfolio = () => {
  return (
    <div>
      <h2 className="PageTitle">My Projects</h2>
      <div className="projects-container">
        <div className="portfolio-website">
          <h3 className="Project Title">Personal Portfolio Website</h3>
          <img className="portfolio" src={portfolio} alt="Portfolio" />
          <p className="ProjectDescription">
            A personal portfolio website built with React.js, aimed at
            highlighting my skills, certifications, projects, hobbies, and
            educational background. The site features a home page, an about
            page, an education page, a portfolio page, and a contact page.
          </p>
          {/* <a href="[Project Link]">View Project</a> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
