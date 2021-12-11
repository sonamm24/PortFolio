import React from 'react'
import './Home.css';

function Home() {
  return (
    <div className='Home'>
      <div className='ProfileImage'>
        <img src={"Sonam.jpg"}>
        </img>
      </div>
      <div className="Description">
        <p className="greeting">HI THERE I'M</p>
        <h1>
          <span className="color">
            SONAM
          </span>
          Malhotra
        </h1>
        <p className="smallBio">
          A
          <span className="color">
            Front-End Web Developer
          </span>
          Passionate about creating interactive applications and experience on the web.
        </p>
        <div className="socialsResume">
          <a className="resumeLink" href="https://sonamm24.github.io/"
            alt="Sonam's Resume" target="_blank"
            rel="noopener noreferrer">Resume</a>
          <a className="LinkdeIn" href="https://www.linkedin.com/in/sonamm24/"
            alt="Sonam's Resume" target="_blank"
            rel="noopener noreferrer"><i className="devicon-linkedin-plain"></i>
          </a>

          <a className="GitHubLink" href="https://sonamm24.github.io/"
            alt="Sonam's Resume" target="_blank"rel="noopener noreferrer">
              <i className="devicon-github-original-wordmark colored"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
