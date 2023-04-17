import React from 'react';
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
            strings: ["Graphics", "leader", "full stack developer", "badass"],
        });

    }, []);
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/photoofme-copy.jpeg" alt="" />
                </div>
                <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Traci Johnson</h1>
                    <h3>Open Source <span ref={textRef}></span></h3>
                    <p>I have a background in Graphic Design having worked for Warner Brothers, TMZ, BET and more. I've now shifted my passion to becoming an expert Fullstack Developer with a Certification from University of Richmond.
                         </p>
                         </div>
            </div>
        </div>
        </div>
    );
}

export default About;
