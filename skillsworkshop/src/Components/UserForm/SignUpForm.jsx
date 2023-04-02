import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./UserForm.css";

function SignUpForm() {
  const [users, setUsers] = useState({
    username: "",
    bio: "",
    phone_number: "",
    first_name: "",
    last_name: "",
    email: "",
    location: "",
    profile_picture: "",
    password: "",
    password2: "",
    is_mentor: false,
    is_mentee: true,
    is_private: false,
    skills: "",
    interest: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  const [showSkills, setShowSkills] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUsers((prevUsers) => ({
      ...prevUsers,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authToken = window.localStorage.getItem("token");

    if (!authToken) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}users/`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...users,
          }),
        });
        if (!response.ok) {
          throw new Error(await response.text());
        }
        navigate(`/events`);
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
      <h2>SIGN UP</h2>
      <div>
        <label htmlFor="first_name">First Name:</label>
        <input type="text" id="first_name" onChange={handleChange} />
      </div>{" "}
      <div>
        <label htmlFor="last_name">Last Name:</label>
        <input type="text" id="last_name" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password2">Confirm Password:</label>
        <input type="password" id="password2" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="phone_number">Phone Number:</label>
        <input type="text" id="phone_number" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          placeholder="eg. Perth, WA"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="profile_picture">Profile Pic:</label>
        <input type="url" id="profile_picture" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <input type="message" id="bio" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="interest">What are you Interested to Learn?</label>
        <select id="interest" onChange={handleChange}>
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
      </div>
      <div>
        <label htmlFor="is_mentor">Are You Signing Up As a Mentor?</label>
        <div className="radio">
          <div className="radio-button">
            <input
              type="radio"
              name="mentor"
              value={true}
              id="is_mentor"
              onChange={() => setShowSkills(true)}
            />
            <label htmlFor="is_mentor" onChange={handleChange}>
              Yes
            </label>
          </div>
          <div className="radio-button">
            <input
              type="radio"
              value={false}
              id="is_mentor"
              onChange={() => setShowSkills(false)}
            />
            <label htmlFor="is_mentor">No</label>
          </div>
        </div>
      </div>
      {showSkills ? (
        <div>
          <h3> Select the skills you'd like to teach: </h3>
          <select htmlFor="skills" onChange={handleChange}>
            <option disabled selected={true}>
              -- Select a Topic --
            </option>
            <option value="AI & Robotics">AI & Robotics</option>
            <option value="Cloud & DevOps">Cloud & DevOps</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Design & Architecture">Design & Architecture</option>
            <option value="Project Management">Project Management</option>
            <option value="Software Development">Software Development</option>
          </select>
        </div>
      ) : (
        ""
      )}
      <button type="submit">Create Account</button>
    </form>
  );
}

export default SignUpForm;
