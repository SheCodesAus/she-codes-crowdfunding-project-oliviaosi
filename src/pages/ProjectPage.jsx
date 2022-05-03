import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

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
      <h2>{projectData.title}</h2>
      <img src={projectData.image} alt="the project"/>
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
    </>
  );
}

export default ProjectPage;

