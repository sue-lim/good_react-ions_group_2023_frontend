import { Link } from "react-router-dom";

// import ProgressBar from "../ProgressBar/ProgressBar";

function ProjectCard(props) {
  const { projectData } = props;

  //   return (
  //     <div className="project-card">
  //       <Link className="proj-name-link" to={`/project/${eventData.id}`}>
  //         <img src={eventData.image} />
  //         <h2>{eventData.title}</h2>
  //         <p>{eventData.description}</p>
  //         <p>created: {new Date(eventData.date_created).toLocaleDateString()}</p>
  //       </Link>
  //     </div>
  //   );
  return (
    <div className="project-card">
      <Link to="/project">
        <img src={projectData.image} />
      </Link>
      <h3>{projectData.title}</h3>
      <button type="submit">Click to view</button>
    </div>
  );
}
