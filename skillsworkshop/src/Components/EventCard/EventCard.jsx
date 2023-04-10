import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ProjectCard(props) {
  const { projectData } = props;

  return (
    <div className="project-card">
      <Link to={`/events/${projectData.id}`}>
        <img className="project-image" src={projectData.image} />
      </Link>
      <div className="event-details">
        <h3 className="card-title">{projectData.event_title}</h3>
        <p>{projectData.location}</p>
      </div>
      {/* <button type="submit">Click to view</button> */}
    </div>
  );
}

export default ProjectCard;
