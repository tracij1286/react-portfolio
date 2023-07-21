import React from 'react';
import "./resume.scss"


function Resume() {

    return (
        <div className="Resume" id="Resume">
            <h2>Traci Johnson Resume</h2>
            <p>Note: Here's my <a href="https://docs.google.com/document/d/1xJGHw4MZXeVCwNR6lqw0hnMRPMnxJjf_eUlO3xr_Zyg/edit?usp=sharing" target="_blank" rel="noreferrer">downloadable resume here</a></p>
            <p>a graphic designer-turned Full Stack web developer with a passion for front end development. With 8 years of technical experience under my belt, I've honed my skills in creating stunning visuals and user-friendly interfaces.  </p>
            <h3>Full Stack Development Experience</h3>
            <p>As a full stack developer in the University of Richmond Extension Full Stack Coding Bootcamp, I have developed proficiency with these technologies:</p>
            <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>React</li>
            </ul>
        </div>
    );
}

export default Resume;