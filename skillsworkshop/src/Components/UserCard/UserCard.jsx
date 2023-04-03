import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function UserCard(props) {
  const { UserData } = props;

  return (
    <div className="project-card">
      <Link to={`/users/${UserData.id}`}>
        <img src={UserData.profile_picture} />
      </Link>
      <div className="event-details">
        <h3>
          {UserData.first_name} {UserData.last_name}
        </h3>
        <p>{UserData.location}</p>
      </div>
      {/* <button type="submit">Click to view</button> */}
    </div>
  );
}

export default UserCard;
