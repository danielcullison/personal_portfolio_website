import React from "react";
import aboutMePic from "../assets/aboutMePic.jpeg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <img src={aboutMePic} alt="Daniel Cullison" className="about-me-pic" />
      <div className="about-text-content">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          👋 Welcome to my portfolio website! My name is Daniel Cullison, and I
          am a Software Engineer from New Orleans, LA. I have a passion for
          technology and discovering ways to leverage it to solve complex
          problems. I am driven by a relentless curiosity and a love for
          continuous learning. My goal is to contribute innovative solutions
          that make a meaningful impact in the world of technology.
        </p>
        <h2 className="skills-title">💻 SKILLS:</h2>
        <ul className="skills-list">
          <li>
            Languages & Frameworks: JavaScript, React.js, Node.js, Python, Django,
            HTML, CSS
          </li>
          <li>Databases: PostgreSQL, MySQL, MongoDB</li>
          <li>
            Technologies: Redux, Jest, REST APIs, Git, Docker, Kubernetes, Operating Systems
          </li>
          <li>Cloud/DevOps: Microsoft Azure, Amazon Web Services</li>
          <li>
            Soft Skills: Self-Motivation, Resiliency, Problem-Solving, Project/Time Management, Communication
          </li>
        </ul>
        <h2 className="certifications-title">📚 CERTIFICATIONS:</h2>
        <ul className="certifications-list">
          <li>CompTIA Security+</li>
          <li>Microsoft Certified: Azure Security Engineer Associate</li>
          <li>Microsoft Certified: Azure Fundamentals</li>
        </ul>
        <h2 className="hobbies-title">😁 HOBBIES:</h2>
        <ul className="hobbies-list">
          <li>Working Out, Poker, and Golf</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
