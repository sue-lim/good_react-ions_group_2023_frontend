import React, { Component, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./UserForm.css";

function RegistrationForm() {
  const authToken = window.localStorage.getItem("token");
  const [users, setUsers] = useState({
    id: "",
    username: "",
    bio: "",
    phone_number: "",
    first_name: "",
    last_name: "",
    email: "",
    location: "",
    profile_picture: "",
    is_mentor: false,
    is_mentee: true,
    is_private: false,
    last_login: "",
    is_superuser: "",
    is_staff: "",
    is_active: "",
    date_joined: "",
    skills: "",
    interest: "",
    groups: "",
    user_permissions: "",
    password: "",
    password2:"",
  });

  const [showSkills, setShowSkills] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUsers((prevUsers) => ({
      ...prevUsers,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!authToken) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}users/`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(users),
        });
        navigate(`/`);
      } catch (err) {
        console.error(err);
      }
    } else {
      navigate(`/`);
    }
  };

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <p>
          Already have an account? Login <Link to="/login">here</Link>.
        </p>
        <div className="text-input-row">
          <div className="text-input-row-name">
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter first name"
              onChange={handleChange}
            />
          </div>
          <div className="text-input-row-name">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter last name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="text-input-row">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <div className="text-input-row">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <div className="text-input-row">
          <label htmlFor="password2">Re-enter your password:</label>
          <input
            type="password"
            id="password2"
            placeholder="Re-enter password"
            onChange={handleChange}
          />
        </div>
        <div className="text-input-row">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="text-input-row">
          <label htmlFor="phone_number">Phone:</label>
          <input
            type="text"
            id="phone_number"
            placeholder="Enter phone number"
            onChange={handleChange}
          />
        </div>
        <div className="text-input-row">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            placeholder="Example: 'Perth, Australia'"
            onChange={handleChange}
          />
        </div>
        <div className="text-input-row">
          <label htmlFor="profile_photo">Avatar image URL:</label>
          <input
            type="URL"
            id="profile_photo"
            placeholder="Example: 'https://example.com/'"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <input
            type="message"
            className="input-bio"
            id="bio"
            placeholder="Enter bio"
            onChange={handleChange}
          />
        </div>
        <div className="skills-input">
          <div>
            <div>
              <h3> Select the skills you'd like to learn: </h3>
            </div>
            <div>
              <input
                type="checkbox"
                name="interest"
                value="skill-ai-robotics"
                id="skill-ai-robotics"
              />
              <label htmlFor="skill-ai-robotics">AI & Robotics</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="interest"
                value="skill-cloud-devops"
                id="skill-cloud-devops"
              />
              <label htmlFor="skill-cloud-devops">Cloud & DevOps</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="interest"
                value="skill-cyber-security"
                id="skill-cyber-security"
              />
              <label htmlFor="skill-cyber-security">Cyber Security</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="interest"
                value="skill-design-architecture"
                id="skill-design-architecture"
              />
              <label htmlFor="skill-design-architecture">
                Design & Architecture
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="interest"
                value="skill-project-management"
                id="skill-project-management"
              />
              <label htmlFor="skill-project-management">
                Project Management
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="interest"
                value="skill-software-development"
                id="skill-software-development"
              />
              <label htmlFor="skill-software-development">
                Software Development
              </label>
            </div>
          </div>
          <div>
            <h3> Would you like to mentor? (Optional) </h3>
          </div>
          <div className="radio">
            <div className="radio-button">
              <input
                type="radio"
                name="mentor"
                value="yes"
                id="yes"
                onChange={() => setShowSkills(true)}
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="radio-button">
              <input
                type="radio"
                name="mentor"
                value="no"
                id="no"
                onChange={() => setShowSkills(false)}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          {showSkills ? (
            <div>
              <div>
                <h3> Select the skills you'd like to teach: </h3>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="skills"
                  value="skill-ai-robotics"
                  id="skill-ai-robotics"
                />
                <label htmlFor="skill-ai-robotics">AI & Robotics</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="skills"
                  value="skill-cloud-devops"
                  id="skill-cloud-devops"
                />
                <label htmlFor="skill-cloud-devops">Cloud & DevOps</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="skills"
                  value="skill-cyber-security"
                  id="skill-cyber-security"
                />
                <label htmlFor="skill-cyber-security">Cyber Security</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="skills"
                  value="skill-design-architecture"
                  id="skill-design-architecture"
                />
                <label htmlFor="skill-design-architecture">
                  Design & Architecture
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="skills"
                  value="skill-project-management"
                  id="skill-project-management"
                />
                <label htmlFor="skill-project-management">
                  Project Management
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="skills"
                  value="skill-software-development"
                  id="skill-software-development"
                />
                <label htmlFor="skill-software-development">
                  Software Development
                </label>
              </div>
            </div>
          ) : null}
        </div>
        <button type="submit">Create Account</button>
      </form>
    </main>
  );
}

export default RegistrationForm;
