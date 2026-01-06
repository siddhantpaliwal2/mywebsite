import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import myImage from '../assets/images/profilepic.jpg';
import bearLogo from '../assets/images/bear.png';
import thirdChairLogo from '../assets/images/thirdchair.png';
import intelLogo from '../assets/images/intel.png';
import uclaLogo from '../assets/images/ucla.png';
import ycLogo from '../assets/images/yc.png';
import './Home.css';
import { findingStartupIdeas } from '../essays/finding-startup-ideas';

const essays = {
  'finding-startup-ideas': findingStartupIdeas,
};

function Home() {
  const { essaySlug } = useParams();
  const navigate = useNavigate();

  const activeEssay = essaySlug ? essays[essaySlug] : null;

  const renderProfile = () => (
    <>
      <div className="profile-header">
        <img src={myImage} alt="Siddhant Paliwal" className="profile-image" />
        <div className="profile-intro">
          I'm Siddhant Paliwal, Mac user since 2017
        </div>
      </div>
      
      <div className="experience-list">
        <div className="experience-item">
          <div className="exp-icon-container">
            <img src={bearLogo} alt="Bear Logo" className="exp-icon" />
          </div>
          <div className="exp-details">
            <span className="exp-role">CTO, Co-founder</span>
            <span className="exp-company">
              <a href="https://www.usebear.ai/">Bear (YC F25)</a>
              <img src={ycLogo} alt="YC Logo" className="yc-badge" />
            </span>
            <span className="exp-date">Present</span>
          </div>
        </div>

        <div className="experience-item">
          <div className="exp-icon-container">
            <img src={thirdChairLogo} alt="Third Chair Logo" className="exp-icon" />
          </div>
          <div className="exp-details">
            <span className="exp-role">Software Engineer</span>
            <span className="exp-company">
              Third Chair (YC X25)
              <img src={ycLogo} alt="YC Logo" className="yc-badge" />
            </span>
          </div>
        </div>

        <div className="experience-item">
          <div className="exp-icon-container">
            <img src={intelLogo} alt="Intel Logo" className="exp-icon" />
          </div>
          <div className="exp-details">
            <span className="exp-role">Software Engineering Intern</span>
            <span className="exp-company">Intel</span>
          </div>
        </div>

        <div className="experience-item">
          <div className="exp-icon-container">
            <img src={uclaLogo} alt="UCLA Logo" className="exp-icon" />
          </div>
          <div className="exp-details">
            <span className="exp-role">B.S. Computational Math & Economics</span>
            <span className="exp-company">UCLA</span>
          </div>
        </div>
      </div>
    </>
  );

  const renderEssay = (essay) => (
    <div className="essay-content">
      <h2>{essay.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: essay.content }} />
    </div>
  );

  return (
    <div className="home-container">
      <div className="home-sidebar">
        <div className="sidebar-title">Menu</div>
        <ul className="sidebar-links">
          <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/home'); }}>Home</a></li>
        </ul>
        <div className="sidebar-title" style={{marginTop: '10px'}}>Essays</div>
        <ul className="sidebar-links">
          <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/home/essay/finding-startup-ideas'); }}>Finding Startup Ideas</a></li>
        </ul>
      </div>
      
      <div className="home-main-content">
        {activeEssay ? renderEssay(activeEssay) : renderProfile()}
      </div>
    </div>
  );
}

export default Home;
