import React from 'react';
import "./topbar.scss";



function Topbar() {

    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#about" className="logo">Traci Johnson</a>
                    <div className="itemContainer">
                       
                    </div>
                </div>

                <div className="right">
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#resume">Resume</a></li>
                    </ul>
                </div>

            </div>

        </div>
    );
}

export default Topbar;