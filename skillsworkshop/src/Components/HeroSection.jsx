import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import video from "./videos/office-80314.mp4";

import { useParams } from "react-router-dom";

// import { allProjects } from "../data";
import EventCard from "../Components/EventCard/EventCard";

function HeroSection() {
  const [workshopList, setWorkshopList] = useState([]);
  //   const [projectList, setProjectList] = useState([]);
  //   // const [user, setUser] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}events/`) // making network request to url
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        // console.log(data);
        setWorkshopList(data);
      });
  }, []);

  function compare(a, b) {
    if (a.date_created < b.date_created) {
      return 1;
    }
    if (a.date_created > b.date_created) {
      return -1;
    }
    return 0;
  }

  const latestWorkshops = workshopList.sort(compare).slice(0, 3);

  return (
    <div>
      <div className="main-container">
        <video src={video} autoPlay loop muted />
        <h1 className="today">Learning Today,</h1>
        <h2 className="tomorrow">Leading Tomorrow.</h2>
        <p className="start"> Start your learning journey today!</p>
        <button className="GetStartedBtn"> Get Started </button>
      </div>
      <div className="containerabout">
        <div id="AboutUs">
          <h1 className="title">Our Mission</h1>
          <p className="AboutUsTxt">
            {" "}
            Create a platform that serves to connect mentors, mentees, and
            organisations within the technology industry to help individuals
            develop technical and non-technical skills.
          </p>
          <p className="AboutUsTxt">
            {" "}
            Our purpose is to reach as many users as possible and provide them
            with the skills that will benefit them in a digital world. We
            believe that by connecting people and providing them with
            opportunities to learn and grow, we can help create a more inclusive
            and equitable world for everyone.{" "}
          </p>
          <p className="AboutUsTxt">(number of users here)</p>
        </div>
      </div>
      <div className="containerevents">
        <h1 className="title">Upcoming events</h1>
        <div className="project-container">
          <div id="project-list">
            {/* {workshopList.map((data, key) => {
              return <EventCard key={key} workshopList={data} />;
            })} */}
          </div>
        </div>
      </div>

      <div className="profile">
        <div className="containerprofile">
          <img
            className="userphoto"
            src="public/pssmile_SheCodesPortraits2023-2.jpg"
            alt="User Photo"
          ></img>
          <div className="userdetails">
            <h1 className="title">Kaye Dante</h1>
            <div className="containerdetails">
              <img className="icon" src="public/email.png"></img>
              <p className="details"> kaye@dante.com </p>
            </div>
            <div className="containerdetails">
              <img className="icon" src="public/location.png"></img>
              <p className="details"> Perth, Western Australia </p>
            </div>
          </div>
        </div>

        <div className="bioandskills">
          <div className="skillscontainer">
            <h1 className="title"> Skills:</h1>
            <li> REACT</li>
          </div>

          <div className="biocontainer">
            <h1 className="title"> BIO:</h1>
            <p> I'm the best front-end developer in town</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
