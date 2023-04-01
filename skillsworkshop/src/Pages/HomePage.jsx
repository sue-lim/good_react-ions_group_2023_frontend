import "../App.css";
import HeroSection from "../Components/HeroSection";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Home() {
  const [workshopList, setWorkshopList] = useState([]);

  const { id } = useParams;

  const authToken = window.localStorage.getItem("token");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}users/1/`, {
      header: {
        Authorization: "Bearer 2b8e703870b50972abf4b8fca16b9b2c854632b4",
      },
    }) // making network request to url
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data);
        setWorkshopList(data);
      });
  }, []);

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}users/1/`) // making network request to url
  //     .then((results) => {
  //       return results.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setWorkshopList(data);
  //     });
  // }, []);

  return (
    // <div>

    // </div>
    <HeroSection />
  );
}

export default Home;
