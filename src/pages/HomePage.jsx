import React from "react";

//components

import ProjectCard from "../components/ProjectCard/ProjectCard";



//Data
import{ allProjects } from "../data";

function HomePage(){
    
    return(
    <div id="project-list">
        {allProjects.map((projectData, key) => {
            return <ProjectCard key={key} projectData={projectData} />;
        })}
        </div>
    );
}

export default HomePage;