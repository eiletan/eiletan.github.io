import React from 'react';
import '../css/Card.css';
// A section of the website, content is contained in these card components
// Pass in content with the key "content".
// Pass in title with the key "title"

export default function Card(props) {
    return (
        <div className={props.classname ? `cardContainer ${props.classname}` : "cardContainer"}>
            {props.title &&
                <div className="cardflexitem title">
                    <p className="cardTitle text">{props.title}</p>
                </div> 
                    
            }
            
            {props.content ? props.content : "No content available"}
            
        </div>
    )
}
