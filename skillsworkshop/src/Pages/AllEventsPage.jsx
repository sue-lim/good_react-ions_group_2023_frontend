import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import EventCard from "../Components/EventCard/EventCard";

function AllEventsPage(props) {
  const { workshopList, setWorkshopList } = props;

  return (
    <div id="project-list">
      {/* {workshopList.map((workshop, key) => {
        return <EventCard key={key} workshopList={workshop} />;
      })} */}
    </div>
  );
}

export default AllEventsPage;
