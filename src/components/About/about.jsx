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
                < img src="https://user-images.githubusercontent.com/115906481/232641626-f4a2f916-643a-4cb5-9850-189e533d5758.jpeg
" alt="Message me" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Traci Johnson</h1>
                    <h3>React <span ref={textRef}></span></h3>
                    <p>a graphic designer-turned Full Stack web developer with a passion for front end development. With 8 years of technical experience under my belt, I've honed my skills in creating stunning visuals and user-friendly interfaces. Recently, I completed a Full Stack web developer certificate from the University of Richmond's bootcamp, which has equipped me with the latest tools and technologies to build robust web applications. I love bringing designs to life and creating seamless user experiences through coding. If you're looking for a creative and technically skilled web developer, feel free to get in touch!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;