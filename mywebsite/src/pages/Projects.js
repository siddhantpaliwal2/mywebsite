import React from 'react';
import './Projects.css'; // Create this file for specific styles
import neurocoin from '../assets/images/neurocoin_logo.png'
import flappy from '../assets/images/flappy.png'
import faceoff from '../assets/images/faceoff.png'
import taskmaster from '../assets/images/taskmaster.png'
import ucla from '../assets/images/ucla.png'



function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="projects-title-bar">
        <span className="projects-title">Projects (Hover and Click for more details)</span>
      </div>
      <div className="projects-container">
        <a href="https://www.neurocoin.app/"><div className="project-window">
          <img src= {neurocoin} alt="Project 1" className="project-image" />
          <div className="project-text">
            <h3>Neurocoin</h3>
            <p>With 3k+ users, Neurocoin rewards you "coins" on Chrome for being productive. It uses AI to do so. I plan to partner with producitivity and wellness companies to promote offers redeemable through Neurocoin!</p>
          </div>
        </div></a>
        <a href="https://github.com/siddhantpaliwal2/PaliBird"><div className="project-window">
          <img src={flappy} alt="Project 2" className="project-image" />
          <div className="project-text">
            <h3>Flappy Bird 2.0</h3>
            <p>My creative take on Flappy Bird. Made with Unity, C#, and some custom artwork with Adobe Photoshop. UCLA Bird replaces Flappy Bird. Coke bottles replace green pipes.</p>
          </div>
        </div></a>
        <a href="https://github.com/siddhantpaliwal2/FaceOff"><div className="project-window">
          <img src={faceoff} alt="Project 3" className="project-image" />
          <div className="project-text">
            <h3>FaceOff</h3>
            <p>My first startup! FaceOff is (was) a semi anonymous social app to make friends. You would match with someone anonymously, speak to them, and their appearence will be revealed. Made with Flutter, PhP, SQL, in a team of 3.</p>
          </div>
        </div></a>
        <a href="/Research_Write_up (2).pdf" target="_blank" rel="noopener noreferrer"><div className="project-window">
          <img src={ucla} alt="Project 5" className="project-image" />
          <div className="project-text">
            <h3>Drone Research @ UCLA</h3>
            <p>I developed an algorithm using Pytorch to automate the analysis of drone footage containing roads. I designed a pipeline to transform DEM Models and analyze them with code directly to develop insights.</p>
          </div>
        </div></a>
        <a href="https://github.com/siddhantpaliwal2/Taskmaster"><div className="project-window">
          <img src={taskmaster} alt="Project 4" className="project-image" />
          <div className="project-text">
            <h3>Taskmaster</h3>
            <p>Taskmaster is an AI SAAS tool with text generation, video generation, and audio generation. Built with NextJS, React, MongoDB</p>
          </div>
        </div></a>
      </div>
    </div>
  );
}

export default Projects;
