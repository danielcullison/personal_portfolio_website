import React from "react";
import profilePicture from "../assets/profile_picture.jpeg";
import linkedInLogo from "../assets/linkedin.png";
import gitHubLogo from "../assets/github.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <header>
      <img src={profilePicture} alt="Daniel Cullison" />
      <h1>Daniel Cullison</h1>
      <p>
        Recently earned a B.S. in Information Systems & Decision Sciences from
        Louisiana State University and also completed a Software Engineering
        Bootcamp offered by the university.
      </p>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/danielcullison/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInLogo} alt="LinkedIn Logo" />
        </a>
        <a
          href="https://github.com/danielcullison"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitHubLogo} alt="GitHub Logo" />
        </a>
      </div>
    </header>
  );
};

export default Home;
