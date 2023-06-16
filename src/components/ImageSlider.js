import {React, useState, useEffect} from 'react';
import '../css/ImageSlider.css';

// An image slider component
// Pass in list of image paths with the key "images".


export default function ImageSlider(props) {
    const [imageIndex, setImageIndex] = useState(0);


    useEffect(() => {
        setImageIndex(0);
    }, [props.images])

    // Dir is an integer; values above 0 represent right direction, values below 0 represent left direction
    function changeImage(dir) {
        if (dir > 0) {
            // If next is clicked on the last image, loop back to the first image
            if (imageIndex + 1 >= props.images.length) {
                setImageIndex(0);
            } else {
                setImageIndex(i => i + 1);
            }
        } else if (dir < 0) {
            // If previous is clicked on the first image, loop back to the last image
            if (imageIndex - 1 < 0) {
                setImageIndex(props.images.length-1);
            } else {
                setImageIndex(i => i - 1);
            }
            
        }
    }

    return (
        <div className="imageSliderContainer">
            {props.images.map((img,i) => {
                return <img className="imageSliderImage" src={require(`../assets/${img}`)} style={{display: imageIndex == i ? "inline" : "none"}} key={i}></img>
            })}
            <p className="imageSliderCounter text">{`${imageIndex+1}/${props.images.length}`}</p>
            <button className="imageSliderButton buttonLeft" onClick={() => changeImage(-1)}>&#10094;</button>
            <button className="imageSliderButton buttonRight" onClick={() => changeImage(1)}>&#10095;</button>
        </div>
    )
}