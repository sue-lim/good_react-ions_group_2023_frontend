

// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";


// Components


// CSS
import "./App.css";

// const HeaderLayout = () => {
//   const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem("token") != null)
//   return (
//     <div className="App">
//       <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
//       <Outlet context={[loggedIn, setLoggedIn]} />
//     </div>
//   );
// }

const router = createBrowserRouter([
  {
    // element: <HeaderLayout />,
    children: [
      { path: "/", element: <HomePage /> },
    ],
  },
]);
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import { useState } from "react";

// Pages
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";

// Components
import Nav from "./Components/Nav/Nav";

//CSS
import "./App.css";

const Layout = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Nav /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/sign-up", element: <SignupPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
