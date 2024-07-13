import React from 'react';
import myImage from './profilepic.jpg'; // Adjust the path as necessary
import './Home.css'; // Create this file for specific styles

function Home() {
  const handleRickRollClick = () => {
    window.location.href = "https://www.youtube.com/watch?v=uHgt8giw1LY";
  };
  return (
    <div>
      <div className="main-content">
        <img src={myImage} alt="Siddhant Paliwal" className="main-image" />
        <div className="main-text-box">
          I'm Siddhant Paliwal, welcome to my website! I'm currently a rising senior at UCLA double majoring in Computational Mathematics and Economics.
          <p>I'm currently a Software Engineering Intern at Intel in Santa Clara. My work revolves around building fullstack AI applications as well as software interface projects that enable remote controlled hardware testing at Intel's Labs. </p>
        </div>
      </div>
      <div className="alert-box">
        <div className="alert-title-bar">
          <span className="alert-title">Alert</span>
        </div>
        <div className="alert-content">
          <p>I discovered my passion for coding a little over a year ago. Since then I've built some passion projects in AI, mobile development, and fullstack. To that end, this website is inspired by Windows 95.</p>
        </div>
        <div className="alert-buttons">
          <button className="alert-button" onClick={handleRickRollClick}>Warning, don't click</button>
        </div>
      </div>
      <div className="main-further-text">
        I'm also involved in the following at UCLA:
        <ul className='main-bullets'>
          <li>Vice President at <a className="main-text" href='https://uclaclubsports.com/sports/cricket'>UCLA Cricket</a></li>
          <li>UCLA Social Sciences Center for Research and Technology <a className="main-text" href='https://computing.sscnet.ucla.edu/'>(SCERT)</a></li>
          <li><a className="main-text" href='https://www.sepatucla.com/'>Sigma Eta Pi</a></li>
        </ul>
        I'm always willing to speak more about current events in technology, research, and startup ideas! Email me at paliwal.siddhant@gmail.com, or find me at:
        <ul className='main-bullets'>
          <li><a className="main-text" href='https://www.linkedin.com/in/siddhantpaliwal'>LinkedIn</a></li>
          <li><a className="main-text" href='https://github.com/siddhantpaliwal2'>Github</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
