import React from "react";
import "./HeroSection.css";
import video from "./videos/office-80314.mp4";

import { allProjects } from "../data";

function HeroSection() {
  //   const [projectList, setProjectList] = useState([]);
  //   // const [user, setUser] = useState([]);

  //   // const { id } = useParams();

  //   useEffect(() => {
  //     fetch(`${import.meta.env.VITE_API_URL}projects`) // making network request to url
  //       .then((results) => {
  //         return results.json();
  //       })
  //       .then((data) => {
  //         setProjectList(data);
  //       });
  //   }, []);

  //   function compare(a, b) {
  //     if (a.date_created < b.date_created) {
  //       return 1;
  //     }
  //     if (a.date_created > b.date_created) {
  //       return -1;
  //     }
  //     return 0;
  //   }

  //   const latestProject = projectList.sort(compare).slice(0, 3);

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
          <h1 className="title">About Us</h1>
          <p className="AboutUsTxt">
            {" "}
            We want to give back to the Tech Industry through Education and
            Workshops where Mentors can develop further their Leadership and
            Teaching Skills
          </p>
        </div>
      </div>
      <div className="containerevents">
        <h1 className="title">Upcoming events</h1>
        <div className="project-container">
          <div id="project-list">
            {allProjects.map((projectData, key) => {
              return <div key={key}>{projectData.title}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
