import React, { Component, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./UserForm.css";

function RegistrationForm() {
  const authToken = window.localStorage.getItem("token");
  const [users, setUsers] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    location: "",
    avatar: "",
    bio: "",
    skills: "",
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
        navigate(`/project`);
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
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="text-input-row">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            onChange={handleChange}
          />
        </div>
        <div className="text-input-row">
          <label htmlFor="avatar">Avatar image URL:</label>
          <input
            type="URL"
            id="avatar"
            placeholder="https://example.com/"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <input
            type="message"
            class="input-bio"
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
                name="skills"
                value="skill-ai-robotics"
                id="skill-ai-robotics"
              />
              <label for="skill-ai-robotics">AI & Robotics</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="skills"
                value="skill-cloud-devops"
                id="skill-cloud-devops"
              />
              <label for="skill-cloud-devops">Cloud & DevOps</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="skills"
                value="skill-cyber-security"
                id="skill-cyber-security"
              />
              <label for="skill-cyber-security">Cyber Security</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="skills"
                value="skill-design-architecture"
                id="skill-design-architecture"
              />
              <label for="skill-design-architecture">
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
              <label for="skill-project-management">Project Management</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="skills"
                value="skill-software-development"
                id="skill-software-development"
              />
              <label for="skill-software-development">
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
              <label for="yes">Yes</label>
            </div>
            <div className="radio-button">
              <input
                type="radio"
                name="mentor"
                value="no"
                id="no"
                onChange={() => setShowSkills(false)}
              />
              <label for="no">No</label>
            </div>
          </div>
          {/* If show skills is true, then do what is in the brackets (otherwise, null = invisible) */}
          {showSkills ? (
            <div>
              <div>
                <h3> Select the skills you'd like to teach: </h3>
              </div>
              <div>
                <input
                  class="checkbox"
                  type="checkbox"
                  name="skills"
                  value="skill-ai-robotics"
                  id="skill-ai-robotics"
                />
                <label for="skill-ai-robotics">AI & Robotics</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="skills"
                  value="skill-cloud-devops"
                  id="skill-cloud-devops"
                />
                <label for="skill-cloud-devops">Cloud & DevOps</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="skills"
                  value="skill-cyber-security"
                  id="skill-cyber-security"
                />
                <label for="skill-cyber-security">Cyber Security</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="skills"
                  value="skill-design-architecture"
                  id="skill-design-architecture"
                />
                <label for="skill-design-architecture">
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
                <label for="skill-project-management">Project Management</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="skills"
                  value="skill-software-development"
                  id="skill-software-development"
                />
                <label for="skill-software-development">
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
