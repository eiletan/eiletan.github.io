import {React, useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import '../css/Project.css';

import Card from './Card';
import ImageSlider from './ImageSlider';


export default function Project(props) {
    
    const navigate = useNavigate();
    const {state} = useLocation();
    const {data} = state;

    const [projectData, setProjectData] = useState(null); 

    useEffect(()=> {
        if (data) {
            setProjectData(data);
        }
    },[]);
    

    function initContent(data) {
        if (projectData) {
            let imgSlider = <ImageSlider images={data["modalImages"]}></ImageSlider>;
            let content = <p className="text">{data["modalContent"]}</p>;
            let imgRow = <div className="row justify-content-center">
                                <div className="col-12">
                                    {imgSlider}
                                </div>
                            </div>;
            let contentRow = <div className="row justify-content-center">
                                <div className="col-12">
                                    {content}
                                </div>
                            </div>;
            let container = <div className="generalColumnFlexContainer">{imgRow}{contentRow}</div>;
            return container;
        } else {
            return null;
        }
    }

    function returnToHome() {
        navigate("/");
    }


    return (
        <div className="projectContainer">
            <div className="row justify-content-center">
                <div className="col">
                    <Card cname="projectPageCardContainer" titlecname="projectPageCardTitle" title={projectData?.["modalTitle"] ? projectData["modalTitle"] : "An error has occurred" } content={initContent(projectData)}></Card>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col">
                    <div className="generalColumnFlexContainer">
                        <div className="buttonContainer">
                            <button className="button closeButton" onClick={() => {
                                returnToHome();
                            }}>
                                Return To Home Page
                            </button>
                        </div>
                    </div>
                            
                </div>
                
            </div>
        </div>
    );
}

