import React from "react";
import "../styles/Portfolio.css"; // Import the CSS file
import portfolio from "../assets/portfolio.png";
import echoEssentials from "../assets/echo-essentials-image(1).png";

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
        </div>
        <div className="project-card">
          <h3 className="project-title">Echo Essentials (E-commerce App)</h3>
          <img
            className="project-image"
            src={echoEssentials}
            alt="Echo Essentials"
          />
          <p className="project-description">
            Echo Essentials is a comprehensive e-commerce platform tailored
            for selling musical instruments like guitars, drums, and pianos.
            Developed using modern technologies such as React.js, Node.js,
            Express.js, and PostgreSQL, it offers users a smooth and efficient
            shopping experience.
          </p>
          <a
            className="project-link"
            href="https://echo-essentials-1.onrender.com/"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
