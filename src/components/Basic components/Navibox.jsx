import React from "react";
import './navibox.css';

const Navibox = (props) => {
    return (
        <>
            <div className="navi-container">
                <div className="navi-box">
                    <img src={props.image} alt="img" />
                    <div className="navi-title">
                        {props.title}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navibox;