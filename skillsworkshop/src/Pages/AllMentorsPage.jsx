import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import UserCard from "../Components/UserCard/UserCard";

function AllMentorsPage() {
  const [mentorList, setMentorList] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}users/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data);
        setMentorList(data);
      });
  }, []);

  console.log(mentorList.is_mentor);

  return (
    <div id="all-events">
      <div id="event-header">
        <h1>EVENTS PAGE</h1>
      </div>
      {mentorList.map((user, key) => {
        return <UserCard key={key} UserData={user} />;
      })}
    </div>
  );
}

export default AllMentorsPage;
