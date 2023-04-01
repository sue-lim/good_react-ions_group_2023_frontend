import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useState } from "react";

// Pages
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/UserProfile";
import CreateEventPage from "./Pages/CreateEventPage";

// Components
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

//CSS
import "./App.css";
import AllEventsPage from "./Pages/AllEventsPage";
import EventPage from "./Pages/EventPage";

const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(
    window.localStorage.getItem("token") != null
  );

  return (
    <div>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet context={[loggedIn, setLoggedIn]} />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/sign-up", element: <SignupPage /> },
      { path: "/users/:id", element: <Profile /> },
      { path: "/events", element: <AllEventsPage /> },
      // { path: "/events/:id", element: <EventDetails/>},
      { path: "/create-event", element: <CreateEventPage /> },
      { path: "/events/:id", element: <EventPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
