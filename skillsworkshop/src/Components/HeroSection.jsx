import React from 'react';
import './HeroSection.css';
import video from './videos/office-80314.mp4';
import teamvideo from './videos/GoodReactionsTeam.mp4';
function HeroSection() {
    return (


        <div>
            <div className="main-container">
                <video src={video} autoPlay loop muted />
                <h1 className='today'>Learning Today,</h1>
                <h2 className='tomorrow'>Leading Tomorrow.</h2>
                <p className='start'> Start your learning journey today!</p>
                <button className='GetStartedBtn'> Get Started </button>

            </div>
            <div id='AboutUs'>
                <h1>About</h1>
                <video src={teamvideo} autoPlay loop />
                <p> We want to give back to the Tech Industry through Education and Workshops where Mentors can develop further their Leadership and Teaching Skills</p>

            </div>
        </div>




    );
}

export default HeroSection;