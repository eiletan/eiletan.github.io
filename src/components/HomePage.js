import {React, useState, useEffect} from 'react';
import '../css/HomePage.css';

import Card from './Card';
import ImageSlider from './ImageSlider';
import Modal from './Modal';


const websiteData = require('../assets/data.json');
let introSection= websiteData["introSection"];
let projectSection = websiteData["projectSection"];
let hobbiesSection = websiteData["hobbiesSection"];

export default function HomePage() {

    const [isModalActive, setModalActive] = useState(false);
    const [modalContent, setModalContent] = useState(projectSection["content"][0]);


    // Pass this handler to the preview card components, they include the content they receive from props and send it to the modal state
    function previewCardClick(id) {
        setModalActive(true);
        setModalContent(projectSection["content"][id]);    
    }

    function closeModal() {
        setModalActive(false);
    }

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
            let card = <Card cname="contentCardContainer" titlecname="contentTitle" title={d["title"]} content={container} key={i} id={d["id"]} clickHandler={previewCardClick}></Card>
            let nestedCol = <div className="col-sm-4">{card}</div>;
            return nestedCol;
        });

        let row = <div className="row justify-content-center">{cards}</div>
        return row;
    }

    function modalCardAsContent(data) {
        let imgSlider = <ImageSlider images={data["modalImages"]}></ImageSlider>;
        let content = <p className="text">{data["modalContent"]}</p>;
        let closeButton = <button className="button closeButton" onClick={closeModal}>Close</button>;
        let buttonContainer = <div className="buttonContainer">{closeButton}</div>;
        let container = <div className="generalColumnFlexContainer">{imgSlider}{content}{buttonContainer}</div>;
        return container;
    }



    return (
        <div className="homePageContainer">
            <div className="row">
                <div className="col">
                    <Card cname="intro" title={introSection["title"]} content={textAsContent(introSection["content"])}></Card>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Card cname="project" title={projectSection["title"]} content={<div className="generalFlexContainer">{previewCardAsContent(projectSection["content"])}</div>}></Card>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Card cname="hobbies" title={hobbiesSection["title"]} content={textAsContent(hobbiesSection["content"])}></Card>
                </div>
            </div>
                
            
            <Modal active={isModalActive} title={modalContent["modalTitle"]} content={modalCardAsContent(modalContent)}></Modal>
        </div>
    )
}