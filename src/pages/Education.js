import React from "react";
import "../styles/Education.css";

const Education = () => {
  return (
    <div>
      <h2 className="title">Education</h2>
      <div className="education-container">
        <div className="ISDS">
          <h3>
            Louisiana State University - B.S., Information Systems & Decsion
            Sciences
          </h3>
          <h4>GPA: 3.4/4.0</h4>
          <h4>RELEVANT COURSEWORK:</h4>
          <ul className="coursework">
            <li>Analysis and Design of Information Systems</li>
            <li>Design of Information Systems Solutions</li>
            <li>Management of Information Systems Projects</li>
            <li>Data and Information Management</li>
            <li>Cloud Computing for Business</li>
            <li>Cyber Risk Management</li>
            <li>Enterprise Architecture</li>
          </ul>
        </div>
        <div className="Bootcamp">
          <h3>Louisiana State University - Software Engineering Bootcamp</h3>
          <h4>SUMMARY:</h4>
          <p>
            An immersive and intensive 28-week program that covers both
            front-end and back-end technologies. The curriculum includes
            fundamentals of web development such as HTML, CSS, and JavaScript,
            before delving into more advanced topics such as React.js for
            building dynamic user interfaces. On the back-end side, the
            curriculum includes Node.js and Express.js for server-side
            development, along with databases like PostgreSQL to manage data
            effectively. The program emphasizes hands-on learning through
            projects and real-world applications, ending with a capstone project
            to complete the program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
