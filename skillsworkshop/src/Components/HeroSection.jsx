import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import video from "./videos/office-80314.mp4";

import { useParams } from "react-router-dom";

// import { allProjects } from "../data";
import EventCard from "../Components/EventCard/EventCard";
import UserCard from "./UserCard/UserCard";

function HeroSection() {
  const [workshopList, setWorkshopList] = useState([]);
  const [userData, setUserData] = useState([]);

  const { id } = useParams();

  const authToken = window.localStorage.getItem("token");

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

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}users/`) // making network request to url
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        // console.log(data);
        setUserData(data);
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
        {authToken ? (
          <Link to="/events" className="GetStartedBtn">
            {" "}
            Get Started{" "}
          </Link>
        ) : (
          <Link to="/login" className="GetStartedBtn">
            {" "}
            Get Started{" "}
          </Link>
        )}
      </div>
      <div className="containerabout">
        <div className="aboutUs">
          <h1 className="title">Our Mission</h1>
          <div className="aboutus-container">
            {" "}
            <p className="AboutUsTxt">
              {" "}
              We give mentors and organisations a space to host workshops to
              help people grow skills within the Tech Industry and expand their
              network in the tech community.
            </p>
            <p className="AboutUsTxt">
              {" "}
              Our purpose is to reach as many users as possible and provide them
              with the skills that will benefit them in a digital world. We
              believe that by connecting people and providing them with
              opportunities to learn and grow, we can help create a more
              inclusive and equitable world for everyone.{" "}
            </p>
          </div>

          <div className="data-box">
            {" "}
            <div className="data-card">
              {" "}
              <p className="data-num">{userData.length}</p>
              <p className="AboutUsTxt">Users</p>
            </div>
            <div className="data-card">
              {" "}
              <p className="data-num">7</p>
              <p className="AboutUsTxt">Mentors</p>
            </div>
            <div className="data-card">
              {" "}
              <p className="data-num">{workshopList.length}</p>
              <p className="AboutUsTxt">Events</p>
            </div>
          </div>
        </div>
      </div>
      <div className="containerevents">
        <h1 className="title">Upcoming events</h1>
        <div className="project-container">
          <div id="project-list">
            {latestWorkshops.map((projectData, key) => {
              return <EventCard key={key} projectData={projectData} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
