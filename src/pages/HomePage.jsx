import React, {useState, useEffect} from "react";
import banner from "./banner.svg";
import headshot from "./headshot.svg";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

//styles
import "./HomePage.css";

// Data
// import { allProjects } from "../data";


function HomePage() {
//States
  const [projectList, setProjectList] = useState([]);

// Action & Helpers
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);

  return (
    <main>
      <div className="hero-banner">
          <div className="hero-banner-text">
              <h1>Tranform people’s life through education</h1>
              <p>Young talents around the world are working on enriching their lives by moving into new careers. 
Help them to change their lives.</p>
              <a href="/" className="button">Support a student today</a>
          </div>
          <img className="hero-image" width="px" src={ banner } alt="successimg" />
      </div>
      <div className="mid-section">
        <img className="mid-section-img" src={headshot} alt="headshots" />
        <div className="mid-section-text">
                <h1>Become an instructor</h1>
                <p>Share your industry experience by donating a little bit of time. 
Your story will inspire many young talents.</p>
                <a href="/" className="button" >Help them today</a>
        </div>
      </div>

      <div className="project-section">
      <div className="section-header">
          <h2>Latest Projects</h2>
      </div>
      <div id="project-list">
      {projectList.map((projectData) => {
        return (
          <ProjectCard
            key={`project-${projectData.id}`}
            projectData={projectData}
          />
        );
      })}
      </div>
      </div>
      

    </main>
    
  );
}

export default HomePage;