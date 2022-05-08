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
      <div className="spacer"></div>

      <div className="pledge-section">
        <h3>You are supporting:</h3>
        
        <div className="pledge-details">
          <img className="avatar" src={projectData.avatar} alt="avatar"/>
          <div className="pledge-details-text">
              
              <h3>{projectData.title}</h3>
              <p>Dream course to change the student's life:</p>
              <h3 className="description">{projectData.description}</h3>
              <div>Created at: {projectData.date_created}</div>
              <div>Goal: ${projectData.goal}</div>
              <div className="status">{`Status: ${projectData.is_open}`}</div>
              <div className="pledges">Pledges:</div>
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

        <div className="donation-section">
          <img className="project-img" src={projectData.image} alt="the project"/>  
          <div className="pledge-donation">
            <h3>Enter your donation:</h3>
            <PledgeForm projectId={id} />
          </div>
        </div>
        
      </div>
     
      <div className="spacer2"></div>
    </>
  );
}

export default ProjectPage;

