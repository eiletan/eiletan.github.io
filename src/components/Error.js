import {useRouteError, useNavigate} from "react-router-dom";
import {React} from 'react';
import Card from "./Card";

import '../css/Error.css';

export default function Error() {
    const navigate = useNavigate();
    const error = useRouteError();
    console.error(error);

    function returnToHome() {
        navigate("/");
    }

    return (
        <div id="errorPage">
            <div className="row justify-content-center">
                <div className="col">
                    <Card title={"An error has occurred."} content={<div className="generalColumnFlexContainer"><p className="text">{error["statusText"] || error["message"]}</p></div>}></Card>
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