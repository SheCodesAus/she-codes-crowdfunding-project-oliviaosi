import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

//Styles
import "./ProjectPage.css"

// Components

import PledgeForm from "../components/PledgeForm/PledgeForm";

// Data
// import { projectData } from "../data";


function ProjectPage() {
// State
const [projectData, setProjectData]= useState({ pledges:[] });

//Hooks useParams listens to the url, destruct the object, and I can grab the Id value. a path parameter
const {id} = useParams();


  //Action and Helpers

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
    .then((results) => {
    return results.json();
    })
    .then((data) => {
    setProjectData(data);
    });
  }, [id]);

// Loading state
if (!projectData){
  return <h3>Loading project...</h3>;
}
console.log(projectData)
//Normal state
  return (
    <>
      <div className="pledge-details">
        <img className="avatar" src={projectData.avatar} alt="avatar"/>
        <div className="pledge-details-text">
            
            <h2>{projectData.title}</h2>
            <p>Dream course to change the student's life:</p>
            <div className="description">{projectData.description}</div>
            <h3>Created at: {projectData.date_created}</h3>
            <div>Goal: ${projectData.goal}</div>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
            {projectData.pledges.map((pledgeData, key) => {
              return (
                <li>
                  ${pledgeData.amount} from {pledgeData.supporter}
                </li>
              );
            })}
          </ul>
        </div>
        
      </div>
      <div className="pledge-section">
        <img className="project-img" src={projectData.image} alt="the project"/>
        <PledgeForm projectId={id} />
      </div>
      
    </>
  );
}

export default ProjectPage;

