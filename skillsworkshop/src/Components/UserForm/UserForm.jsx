import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function RegistrationForm() {
  const authToken = window.localStorage.getItem("token");
  const [users, setUsers] = useState({
    username: "",
    email: "",
    password: "",
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
      <button type="submit">Create Account</button>
      <p>
        Already have an account? Login <Link to="/login">here</Link>.
      </p>
    </form>
  );
}

export default RegistrationForm;
