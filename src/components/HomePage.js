import {React, useState} from 'react';
import '../css/HomePage.css';

import Card from './Card';
import ImageSlider from './ImageSlider';
import Modal from './Modal';


const websiteData = require('../assets/data.json');
let introSection= websiteData["introSection"];
let projectSection = websiteData["projectSection"];
let hobbiesSection = websiteData["hobbiesSection"];

export default function HomePage() {

    function textAsContent(data) {
        let jsx = <div className="cardflexitem">
          <p className="text">{data}</p>
        </div>
        return jsx;
    }
    
    function previewCardAsContent(data) {
        let cards = data.map((d,i) => {
            let img = <img className="previewCardImage" src={require(`../assets/${d["image"]}`)}></img>;
            let content = <p className="text">{d["content"]}</p>;
            let container = <div className="generalFlexContainer">{img}{content}</div>
            return <Card cname="contentCardContainer" title={d["title"]} content={container} key={i} id={i}></Card>
        })
        return cards;
    }


    return (
        <div className="homePageContainer">
            <Card cname="intro" title={introSection["title"]} content={textAsContent(introSection["content"])}></Card>
            <Card cname="project" title={projectSection["title"]} content={<div className="generalFlexContainer">{previewCardAsContent(projectSection["content"])}</div>}></Card>
            <Card cname="hobbies" title={hobbiesSection["title"]} content={textAsContent(hobbiesSection["content"])}></Card>
            <Modal title={"MODAL"} content={<ImageSlider images={projectSection["content"][0]["modalImages"]}></ImageSlider>}></Modal>
        </div>
    )
}