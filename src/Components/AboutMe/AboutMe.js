import React from 'react';
import './AboutMe.css';
const AboutMe = () => {
    return(
        <div className="aboutMe">
            <div className="title">
                About Me
            </div>
            <div className="aboutMeContent">
                <div className="card">
                <div className="myPicture">
                </div>
                <p>
                I am a full stack web developer with a vast array of knowledge in many front and backend technologies. I have successfully lead the development of a  SaaS platform that services several NYC restaurants.  I have a deep passion for anything tech and am dedicated to perfecting my craft. 
                </p>
                </div>
                <div className="filler"></div>
            </div>
         
        </div>
    )
}

export default AboutMe;