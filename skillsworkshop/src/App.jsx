

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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
