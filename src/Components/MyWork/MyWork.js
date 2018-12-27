import React from 'react';
import './MyWork.css';
import Card from './Card';


const MyWork = () => {
    return(
        <div className="myWork">
            <div className="title">My Work</div>
            <div className="workContainer">
                <Card dates="8/1/2018 - current" 
                 description= "Provided tutoring services to over eighty plus students in a vast array of technology platforms. "
                image='./assets/Images/trilogy.png'/>
                <Card dates="9/20/2018 - 12/1/2018" 
                 description="Created a SaaS platform from the ground up that currently services several NYC restaurants. "
                image='./assets/Images/sitParker.png'/>
                <Card dates="7/10/2018 - 8/10/2018" 
                 description="Freelance."
                image='./assets/Images/mje.png'/>
                <Card dates="10/10/2016 - 9/10/2017"  
                 description="Worked in a fast pace start-up environment  with a team of developers creating web applications. "
                image='./assets/Images/crowded.png'/>
            </div>
        </div>
    )
}


export default MyWork;