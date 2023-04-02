import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import EventCard from "../Components/EventCard/EventCard";

function AllEventsPage(props) {
  const { workshopList, setWorkshopList, projectData } = props;

  return (
    <div id="project-list">
      {workshopList.map((projectData, key) => {
        return <EventCard key={key} projectData={projectData} />;
      })}
    </div>
  );
}

export default AllEventsPage;
