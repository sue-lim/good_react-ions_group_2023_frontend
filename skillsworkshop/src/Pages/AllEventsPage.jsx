import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import EventCard from "../Components/EventCard/EventCard";

function AllEventsPage() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}events/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);

  function compare(a, b) {
    if (a.date_created < b.date_created) {
      return 1;
    }
    if (a.date_created > b.date_created) {
      return -1;
    }
    return 0;
  }

  const latestProjects = projectList.sort(compare);

  return (
    <div className="events">
      <div className="events-header">
        <h1 className="title">CURRENT EVENTS</h1>
      </div>
      <div className="all-events-container">
        {" "}
        <div className="all-events">
          {latestProjects.map((project, key) => {
            return <EventCard key={key} projectData={project} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AllEventsPage;
