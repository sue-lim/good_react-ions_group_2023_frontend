import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "../App.css";

function EventPage() {
  const [projectData, setProjectData] = useState({ attendees: [] });

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

  const [UserData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}users/${id}/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, []);

  return (
    <div className="eventpage">
      <div className="event-wrap">
        <div>
          <h2 className="event_title">{projectData.event_title}</h2>
        </div>

        <div className="photoandorg">
          <div className="photobox">
            <img className="project_img" src={projectData.image} />
          </div>

          <div className="orgbox">
            <div className="orgimgname">
              <img className="organiser_img" src={UserData.profile_picture} />

              <div className="mynightmare">
                <h4 className="org_title">Organiser:</h4>
                <p className="eventdata">
                  {UserData.first_name} {UserData.last_name}
                </p>
              </div>
            </div>

            <div className="containerdetails">
              <img
                className="iconevent"
                src="https://i.postimg.cc/JzRNrSdn/location.png"
              ></img>
              <p className="eventdata">{projectData.location}</p>
            </div>
            <div className="containerdetails">
              <img
                className="iconevent"
                src="https://i.postimg.cc/d3p39jSC/time.png"
              ></img>
              <p className="eventdata">
                {new Date(projectData.datetime).toLocaleDateString()}{" "}
                {new Date(projectData.datetime).toLocaleTimeString()}
              </p>
            </div>

            <div className="containerdetails">
              <h4 className="org_title">Topic:</h4>{" "}
              <p className="eventdata">{projectData.topic}</p>
            </div>

            <div className="containerdetails">
              <h4 className="org_title">Seats:</h4>{" "}
              <p className="eventdata">{projectData.max_participants}</p>
            </div>

            <button className="attend_btn" type="submit">
              Attend
            </button>
          </div>
        </div>

        <div className="project_details">
          <h2 className="details_title">Description:</h2>
          <p className="description">{projectData.description}</p>
        </div>

        <div className="attendees">
          <h2 className="details_title">Attendees:</h2>
          <img className="organiser_img" src={UserData.profile_picture} />
        </div>
      </div>

      <div className="project_details">

        <h2 className="details_title">Description:</h2>
        <p className="description">{projectData.description}</p>
      </div>

      <div className="attendees">
        <h2 className="details_title">Attendees:</h2>
        <div>
          {projectData.attendees.map((attendeesData, key) => {
            return (
              <div key={key}>
                <div className="orgimgname">
                  <img className="organiser_img" src={attendeesData.profile_picture} />
                  <p className="eventdata">{attendeesData.first_name} {attendeesData.last_name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

export default EventPage;

// <div>
//   <p>{new Date(projectData.datetime).toLocaleDateString()}</p>
//   <p>{projectData.is_open ? <p>Still open</p> : <p>Closed</p>}</p>
// </div>
