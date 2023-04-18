// eslint-disable-next-line
import { useState } from 'react';
import "./about.scss"
import { useEffect, useRef } from 'react';
import { init } from 'ityped'


function About() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Graphics", "leader", "full stack developer", "driven"],
        });

    }, []);

    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                <img src='/assets/TraciJohnson-headshot.jpeg' alt="Traci Johnson" />
                   
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Traci Johnson</h1>
                    <h3>React <span ref={textRef}></span></h3>
                    <p>Having worked as a Graphic Desinger for Warner brothers, TMZ, Bet and more, I've now transitioned into a new passion for front end development.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;