import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ProjectCard(props) {
  const { workshop } = props;

  return (
    <div className="project-card">
      <Link to="/">
        <img src={workshop.image} />
      </Link>
      <h3>{workshop.event_title}</h3>
      <button type="submit">Click to view</button>
    </div>
  );
}

export default ProjectCard;
