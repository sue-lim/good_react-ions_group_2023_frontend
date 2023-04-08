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

  // console.log(mentorList.is_mentor);

  return (
    <div className="events">
      <div className="events-header">
        <h1 className="title">Reach out to our Mentors!</h1>
      </div>
      <div className="all-mentors-container">
        {" "}
        <div className="all-mentors">
          {mentorList.map((user, key) => {
            return <UserCard key={key} UserData={user} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AllMentorsPage;
