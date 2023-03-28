import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import { useState } from "react";

// Pages
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import HomePage from "./pages/HomePage";
import Profile from "./Pages/UserProfile";

// Components
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

//CSS
import "./App.css";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
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
      // { path: "/events/:id", element: <EventDetails/>},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
