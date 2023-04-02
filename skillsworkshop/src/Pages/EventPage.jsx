import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function EventPage() {
  const [projectData, setProjectData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}events/${id}/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, []);

  return (
    <div>
      <div className="outer-box">
        <div className="inner-box">
          <img className="project-img" src={projectData.image} />
          <div className="project-text">
            <h2>{projectData.title}</h2>
            <p>{new Date(projectData.datetime).toLocaleDateString()}</p>
            <p>{projectData.description}</p>
            <p>{projectData.is_open ? <p>Still open</p> : <p>Closed</p>}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
