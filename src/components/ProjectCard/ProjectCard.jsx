
import React from "react";
import { Link } from "react-router-dom";

//styles
import "./ProjectCard.css";

function ProjectCard(props) {
    const { projectData } = props;
  return (
        <div className="project-card">
        <Link to={`/project/${projectData.id}`}>
            <img src={projectData.image} alt="the project"/>
            <h3>{projectData.title}</h3>
            <h3>{projectData.category}</h3>
            <div className="description">{projectData.description}</div>
        </Link>
        </div>
  );
}

export default ProjectCard;


// import React from "react";
// import { Link } from "react-router-dom";

// // Styles
// import "./ProjectCard.css";

// function ProjectCard({ projectData }) {
//   return (
//     <div className="project-card">
//       <Link to={`/project/${projectData.id}`}>
//         <img src={projectData.image} alt="the project" />
//         <h3>{projectData.title}</h3>
//       </Link>
//     </div>
//   );
// }

// export default ProjectCard;