import "./EventForm.css";

function EventForm() {
  return (
    <form>
      <div>
        <h1>Create A Workshop</h1>
        {/* <label htmlFor="username">Username:</label> */}
        <input type="text" id="topic" placeholder="Select a topic" />
      </div>
      <div>
        {/* <label htmlFor="password">Password:</label> */}
        <input type="password" id="password" placeholder="Password" />
        <list id="topic-list">
          <option value="AI & Robotics">AI & Robotics</option>
        </list>
      </div>
      <div>
        <button className="project-button" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}

export default EventForm;
