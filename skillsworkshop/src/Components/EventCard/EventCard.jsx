import { Link } from "react-router-dom";

import "./ProjectCard.css";
import ProgressBar from "../ProgressBar/ProgressBar";

function ProjectCard(props) {
  const { eventData } = props;

  return (
    <div className="project-card">
      <Link className="proj-name-link" to={`/project/${eventData.id}`}>
        <img src={eventData.image} />
        <h2>{eventData.title}</h2>
        <p>{eventData.description}</p>
        <p>created: {new Date(eventData.date_created).toLocaleDateString()}</p>
      </Link>
    </div>
  );
}

export default ProjectCard;
