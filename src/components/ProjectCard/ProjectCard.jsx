import React from "react";
import { Link } from "react-router-dom";

//styles
import "./ProjectCard.css"

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div>
        <Link to={`/project/${projectData.id}`}>
            <img src={projectData.image} alt="the project"/>
            <h3>{projectData.title}</h3>
        </Link>
        </div>
);
}

export default ProjectCard;