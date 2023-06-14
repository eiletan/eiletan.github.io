import React from 'react';
import '../css/Card.css';
// A container for content, with a title and content section
// Pass in content with the key "content".
// Pass in title with the key "title"
// Pass in an optional class name for the container with the key "cname"
// Pass in an optional class name for the title div with the key "titlecname"
// Pass in an optional click handler with the key "clickHandler", this handler will always return the id of the content it contains

export default function Card(props) {
    return (
        <div className={props.cname ? `cardContainer ${props.cname}` : "cardContainer"} onClick={props.clickHandler ? () => {props.clickHandler(props.id)} : null}>
            {props.title &&
                <div className={props.titlecname ? `cardflexitem title ${props.titlecname}` : `cardflexitem title`}>
                    <p className="cardTitle text">{props.title}</p>
                </div> 
                    
            }
            
            {props.content ? props.content : "No content available"}
            
        </div>
    )
}
