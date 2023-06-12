import React from 'react';
import '../css/Card.css';
// A container for content, with a title and content section
// Pass in content with the key "content".
// Pass in title with the key "title"

export default function Card(props) {
    return (
        <div className={props.cname ? `cardContainer ${props.cname}` : "cardContainer"}>
            {props.title &&
                <div className="cardflexitem title">
                    <p className="cardTitle text">{props.title}</p>
                </div> 
                    
            }
            
            {props.content ? props.content : "No content available"}
            
        </div>
    )
}
