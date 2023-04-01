import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EventForm.css";

function EventForm() {
  const [workshop, setWorkshop] = useState({
    event_title: "",
    description: "",
    datetime: null,
    location: "",
    max_participants: "",
    image: "",
    is_open: false,
  });

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
      {/* <div>
        <label htmlFor="topic">Topic:</label>
        <input type="text" id="topic" placeholder="Select a topic" />
      </div> */}
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
