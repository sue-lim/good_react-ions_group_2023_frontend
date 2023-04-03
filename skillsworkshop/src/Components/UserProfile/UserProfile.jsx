import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./UserProfile.css";

function UserProfile() {
  const [UserData, setUserData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}users/${id}/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, []);

  return (

    <div className="profile">

      <div className="containerprofile">
        <img className="userphoto" src={UserData.profile_picture} alt="User Photo"></img>
        <div className="userdetails">
          <h1 className="user_name">{UserData.first_name} {UserData.last_name}</h1>
          <div className="containerdetails">
            <img className="icon" src="https://i.postimg.cc/W1VnDdts/email.png"></img>
            <p className="details">{UserData.email}</p>
          </div>
          <div className="containerdetails">
            <img className="icon" src="https://i.postimg.cc/JzRNrSdn/location.png"></img><p className="details">{UserData.location}</p>
          </div>
        </div>
      </div>

      <div className="bioandskills">

        <div className="skillscontainer">
          <h1 className="user_titles"> Skills:</h1>
          <ul>
            <p className="skills">{UserData.skills}</p>
          </ul>
        </div>

        <div className="biocontainer">
          <h1 className="user_titles"> BIO:</h1>
          <p>{UserData.bio}</p>
        </div>

      </div>




    </div>
  );
}

export default UserProfile;

