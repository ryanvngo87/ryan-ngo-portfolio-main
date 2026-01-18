import "../styles/About.css";
import useFadeIn from "../hooks/useFadeIn.js";
import {useEffect} from "react";

function About() {
  const [ref, visible] = useFadeIn();
  const [skillRef, skillVisible] = useFadeIn();
  const [educationRef, educationVisible] = useFadeIn();
  const [experienceRef, experienceVisible] = useFadeIn();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="about-container">
      <div ref={ref} className={`fade-in ${visible ? "visible" : ""}`}>
        <div className="about-header">
        <h2>about me</h2>
        </div>
      </div>
      
      <div ref={ref} className={`fade-in ${visible ? "visible" : ""}`}>
        <div className="about-image">
          <img
            src="./images/ryan-ngo-2.jpg"
            alt="profile"
            className="profile-img-2"
          />
        </div>
      </div>

      <div ref={ref} className={`fade-in ${visible ? "visible" : ""}`}>
        <div className="bio-section">
          <p>
            My name is <span className="name-highlight">[Ryan Ngo]</span>, and I am an aspiring software developer that has
            a passion for creating cool stuff, and programming allows me to explore my creativity.
          </p>
        </div>
      </div>

      <div className="info-section">
        <div ref={skillRef} className={`info-card fade-in ${skillVisible ? "visible" : ""}`}>
          <img
            src="/icons/skills.png"
            alt="Skills Icon"
            className="info-icon"
          />
          <h3>Skills</h3>
          <p>
            <b>Languages: </b> Java, C#, JavaScript, CSS, HTML, SQL
          </p>
          <p>
            <b>Technologies:</b> ASP.NET, Blazor, Entity Framework, SQL Server, Git, React.js, DevExpress, Azure DevOps Server,
            Visual Studio
          </p>
        </div>
        <div ref={educationRef} className={`info-card fade-in ${educationVisible ? "visible" : ""}`}>
          <img
            src="/icons/education.png"
            alt="Education Icon"
            className="info-icon"
          />
          <h3>Education</h3>
          <p>
            <img
              src="/icons/utd_logo.png"
              alt="UTD Logo"
              className="university-logo"
            />
            B.S. in Computer Information Systems & Technology - The University
            of Texas at Dallas
          </p>
          <p>
            <i>2022 - 2025</i>
          </p>
        </div>
        <div ref={experienceRef} className={`info-card fade-in ${experienceVisible ? "visible" : ""}`}>
          <img
            src="/icons/experience.png"
            alt="Experience Icon"
            className="info-icon"
          />
          <h3>Experience</h3>
          <img
              src="/icons/daisy-brand.jpg"
              alt="Daisy Brand Logo"
              className="internship-logo"
            />
          <p>Software Development Intern - Daisy Brand</p>
          <p>
            <i>Dallas, TX</i>
          </p>
          <p>
            <i>May 2024 - August 2024</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
