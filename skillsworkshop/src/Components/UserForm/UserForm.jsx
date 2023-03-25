import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="first_name">First name:</label>
          <input
            type="text"
            id="first_name"
            placeholder="Enter first name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="last_name">Last name:</label>
          <input
            type="text"
            id="last_name"
            placeholder="Enter last name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Your email here"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="avatar">Avatar image URL:</label>
          <input
            type="text"
            id="avatar"
            placeholder="Enter avatar image URL"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <input
            type="text"
            id="bio"
            placeholder="Enter bio"
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Do you want to mentor? (Optional) </h3>
          <input
            type="text"
            id="skills"
            placeholder="Enter skills"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Account</button>
        <p>
          Already have an account? Login <Link to="/login">here</Link>.
        </p>
      </form>
    </div>
  );
}

export default RegistrationForm;
