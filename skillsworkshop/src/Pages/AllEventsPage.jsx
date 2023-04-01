import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import EventCard from "../Components/EventCard/EventCard";

function AllEventsPage() {
  const [workshopList, setWorkshopList] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}events`) // making network request to url
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setWorkshopList(data);
      });
  }, []);

  return <div id="project-list">{workshopList.map()}</div>;
}

export default AllEventsPage;
