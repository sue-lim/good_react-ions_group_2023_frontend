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
        <div className="name-section">
          {" "}
          <h3 className="card-title">
            {UserData.first_name} {UserData.last_name}&nbsp;
          </h3>
          <p> | {UserData.location}</p>
        </div>

        <p>{UserData.skills}</p>
      </div>
      {/* <button type="submit">Click to view</button> */}
    </div>
  );
}

export default UserCard;
