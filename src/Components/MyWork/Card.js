import React from 'react';
import './MyWork.css';




const Card = (props) => {
    return(
        <div>
        <div style={{backgroundImage: 'url('+ props.image + ')'}} className="card workCard">
            
        </div>
        <div className="description">
            
            <div>Dates : {props.dates}</div>
            <div>Description : {props.description}</div>
            <div>{props.link}</div>
            
        </div>
        </div>
    )
}


export default Card;