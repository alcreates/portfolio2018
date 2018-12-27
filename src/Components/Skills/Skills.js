import React from 'react';
import './Skills.css';


const Skills = () => {
    return(
    <div className="skills">
        <div className="title">
        Skills
        </div>
            <div className="content">
                    <div className="skillsContainer">
                        <div>
                            <i className="devicon-javascript-plain"></i>
                        </div>
                        <div>
                            <i className="devicon-react-original-wordmark"></i>
                        </div>
                        <div>
                            <i className="devicon-html5-plain-wordmark"></i>
                        </div>
                        <div>  
                            <i className="devicon-css3-plain-wordmark"></i>
                        </div>
                        <div>
                            <i className="devicon-nodejs-plain-wordmark"></i>
                        </div>
                        <div>
                            <i className="devicon-postgresql-plain-wordmark"></i>
                        </div>
                    </div>
                    <div className="skillsContainer">
                        <div>   
                            <i className="devicon-git-plain-wordmark"></i>
                        </div>
                        <div>  
                            <i className="devicon-mongodb-plain-wordmark"></i>
                        </div>
                        <div> 
                            <i className="devicon-angularjs-plain-wordmark"></i>
                        </div>
                        <div>
                            <i className="devicon-jquery-plain-wordmark"></i>
                        </div>
                        <div>  
                            <i className="devicon-python-plain-wordmark"></i>
                        </div>
                        <div>
                            <i className="devicon-heroku-original-wordmark"></i>
                        </div>
                    </div>
            </div>
        </div>
   )
}



export default Skills;