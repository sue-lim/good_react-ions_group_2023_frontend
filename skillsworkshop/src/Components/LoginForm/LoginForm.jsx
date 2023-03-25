import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

function LoginForm() {
  const [, setLoggedIn] = useOutletContext();

  State;
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  Hooks;

  const navigate = useNavigate();

  Actions;
  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (credentials.username && credentials.password) {
      const { token } = await postData();
      window.localStorage.setItem("token", token);
      setLoggedIn(true);
      navigate("/");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Log in</h2>
      <div>
        <label className="label" htmlFor="username">
          Username:
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
      <p>
        Don't have an account? Register <Link to="/sign-up">here</Link>.
      </p>
    </form>
  );
}
export default LoginForm;
