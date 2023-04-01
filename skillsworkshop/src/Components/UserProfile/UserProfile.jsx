import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./UserProfile.css";

function UserProfile() {
    const [userData, setUserData] = useState([]);

    const { id } = useParams()

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
        <div>

            <img className="project-card-img" src={userData.profile_picture} />
            <h3 className="project-card-name">{userData.username}</h3>

            <div className="profile">
                <div className="containerprofile">
                    <img className="userphoto" src={userData.profile_picture} alt="User Photo"></img>
                    <div className="userdetails">
                        <h1 className="title">{userData.first_name} {userData.last_name}</h1>
                        <div className="containerdetails">
                            <img className="icon" src="https://i.postimg.cc/W1VnDdts/email.png"></img>
                            <p className="details">{userData.email}</p>
                        </div>
                        <div className="containerdetails">
                            <img className="icon" src="https://i.postimg.cc/JzRNrSdn/location.png"></img><p className="details">{userData.location}</p>
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
                        <p>{userData.bio}</p>
                    </div>

                </div>
            </div>



        </div>
    );
}

export default UserProfile;


