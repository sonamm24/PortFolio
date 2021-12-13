import React from 'react';
import './App.css';
import { Navbar } from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
// import AboutMe from './Components/AboutMe/AboutMe';
// import Skills from './Components/Skills/Skills';
// import Projects from './Components/Projects/Projects';
// import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar visibilityStart={false} />
        <div className='RouteWrapper'>
          <Routes>
            <Route path="/" exact element={<Home />}/>
            {/* <Route path="/aboutme" element={<AboutMe />} /> */}
            {/* <Route path="/Skills" element={<Skills />} /> */}
            {/* <Route path="/Projects" element={<Projects />} /> */}
            {/* <Route path="/Contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </Router>
    );
  }
}

