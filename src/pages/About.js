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
          am a Software Developer from New Orleans, LA. I have a passion for
          technology and discovering ways to leverage it to solve complex
          problems. I am driven by a relentless curiosity and a love for
          continuous learning. My goal is to contribute innovative solutions
          that make a meaningful impact in the world of technology.
        </p>
        <h2 className="skills-title">💻 SKILLS:</h2>
        <ul className="skills-list">
          <li>
            Languages & Frameworks: JavaScript, React, Node, Python, Django,
            HTML, CSS
          </li>
          <li>Databases: PostgreSQL, MySQL</li>
          <li>
            Technologies: Docker, Kubernetes, Azure, AWS, Git, REST APIs,
            Operating Systems
          </li>
          <li>Security: Cloud Security, Application Security, Data Security</li>
          <li>
            Soft Skills: Self Motivation, Problem-Solving, Project Management,
            Good Communication
          </li>
        </ul>
        <h2 className="certifications-title">📚 CERTIFICATIONS:</h2>
        <ul className="certifications-list">
          <li>CompTIA Security+</li>
          <li>Microsoft Certified: Azure Security Engineer Associate</li>
          <li>Microsoft Certified: Azure Fundamentals</li>
          <li>AWS Cloud Practitioner (Expired)</li>
          <li>SAFe Certified Scrum Master (Expired)</li>
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
