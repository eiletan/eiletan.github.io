import React from 'react';
import Card from './Card';
import '../css/Modal.css';
import '../css/Card.css';

// A modal component. Uses the Card component
// Pass in content with the key "content".
// Pass in title with the key "title"

export default function Modal(props) {
    return (
        <div id="modal" className="modalContainer" style={{display: props.active ? "block" : "none"}}>
            <Card cname="modalContentContainer" title={props.title} content={props.content}></Card>
        </div>
    )
}