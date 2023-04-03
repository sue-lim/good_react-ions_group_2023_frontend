import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Select from "react-select";
// import "./EventForm.css";

function EventForm() {
  const [workshop, setWorkshop] = useState({
    topic: "",
    event_title: "",
    description: "",
    datetime: null,
    location: "",
    max_participants: "",
    image: "",
    is_open: false,
    organizer: null,
  });

  const [users, setUsers] = useState([]);

  // const options = [
  //   { value: "AI & Robotics", label: "AI & Robotics" },
  //   { value: "Cloud & DevOps", label: "Cloud & DevOps" },
  //   { value: "Cyber Security", label: "Cyber Security" },
  //   { value: "Design & Architecture", label: "Design & Architecture" },
  //   { value: "Project Management", label: "Project Management" },
  //   { value: "Software Development", label: "Software Development" },
  // ];

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}users/`) // making network request to url
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setWorkshop((prevWorkshop) => ({
      ...prevWorkshop,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authToken = window.localStorage.getItem("token");

    if (authToken) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}events/`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${authToken}`,
          },
          body: JSON.stringify({
            ...workshop,
          }),
        });
        if (!response.ok) {
          throw new Error(await response.text());
        }
        navigate(`/`);
      } catch (err) {
        console.error(err);
        alert(`Error: ${err.message}`);
      }
    } else {
      navigate(`/`);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Create A Workshop</h1>
      <div>
        <label htmlFor="organizer">Organizer:</label>
        <select id="organizer" onChange={handleChange}>
          {users.map((users, pk) => {
            return <option value={pk}>{users.username}</option>;
          })}
        </select>
      </div>
      <div>
        <label htmlFor="topic" list="topic" onChange={handleChange}>
          Topic:
        </label>
        <select id="topic" onChange={handleChange}>
          <option disabled selected="true">
            -- Select a Topic --
          </option>
          <option value="AI & Robotics">AI & Robotics</option>
          <option value="Cloud & DevOps">Cloud & DevOps</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="Design & Architecture">Design & Architecture</option>
          <option value="Project Management">Project Management</option>
          <option value="Software Development">Software Development</option>
        </select>
        {/* <Select id="topic" options={options} isMulti /> */}
      </div>
      <div>
        <label htmlFor="event_title">Title:</label>
        <input
          type="text"
          id="event_title"
          placeholder="Title"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="datetime">Date:</label>
        <input type="date" id="datetime" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="url" id="image" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="max_participants">Max Attendees:</label>
        <input
          type="number"
          min-value="1"
          max-value="150"
          id="max_participants"
          onChange={handleChange}
        />
      </div>
      <label htmlFor="is_open">
        Is Open:
        <input
          className="checkbox"
          type="checkbox"
          id="is_open"
          onChange={handleChange}
        />
      </label>
      <div>
        <button className="project-button" type="submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default EventForm;
