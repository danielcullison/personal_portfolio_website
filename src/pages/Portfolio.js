import React from "react";
import "../styles/Portfolio.css"; // Import the CSS file
import portfolio from "../assets/portfolio.png";

const Portfolio = () => {
  return (
    <div className="portfolio-section">
      <h2 className="portfolio-title">My Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3 className="project-title">Personal Portfolio Website</h3>
          <img className="project-image" src={portfolio} alt="Portfolio" />
          <p className="project-description">
            A personal portfolio website built with React.js, aimed at
            highlighting my skills, certifications, projects, hobbies, and
            educational background. The site features a home page, an about
            page, an education page, a portfolio page, and a contact page.
          </p>
          {/* <a className="project-link" href="[Project Link]">View Project</a> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
