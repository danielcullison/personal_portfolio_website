import React from "react";
import aboutMePic from "../assets/aboutMePic.jpeg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <img src={aboutMePic} alt="Daniel Cullison" className="aboutMePic" />
      <div className="text-content">
        <h1>About Me</h1>
        <p>
          👋 Welcome to my portfolio website! My name is Daniel Cullison. I am a
          Software Developer from New Orleans, LA. I have a passion for
          technology and discovering ways to leverage it to solve complex
          problems. I am driven by a relentless curiosity and a love for
          continuous learning. My goal is to contribute innovative solutions
          that make a meaningful impact in the world of technology.
        </p>
        <h2>💻 SKILLS:</h2>
        <ul>
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
        <h2>📚 CERTIFICATIONS:</h2>
        <ul>
          <li>CompTIA Security+</li>
          <li>Microsoft Certified: Azure Security Engineer Associate</li>
          <li>Microsoft Certified: Azure Fundamentals</li>
          <li>AWS Cloud Practitioner (Expired)</li>
          <li>SAFe Certified Scrum Master (Expired)</li>
        </ul>
        <h2>😁 HOBBIES:</h2>
        <ul>
          <li>Working Out, Poker, and Golf</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
