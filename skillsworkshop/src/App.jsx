import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import { useState } from "react";

// Pages
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./pages/HomePage";

// Components
import Nav from "./Components/Nav/Nav";

//CSS
import "./App.css";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
