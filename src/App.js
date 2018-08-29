import React, { Component } from 'react';
import ProjectsComponent from './ProjectsComponent';
import AboutMe from './AboutMe';
import Influences from './Influences';

class App extends Component {
  render() {
    return (
      <Influences />
      /*<div className='portfolio-components'>
        <div className='about-me'>
          <AboutMe />
        </div>
        <div className='my-projects'>
          <ProjectsComponent />
        </div>
      </div>*/
    );
  }
}

export default App;
