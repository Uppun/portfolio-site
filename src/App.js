import React, { Component } from 'react';
import ProjectsComponent from './ProjectsComponent';
import AboutMe from './AboutMe';
import Influences from './Influences';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className='portfolio-components'>
        <div className='navbar-wrapper'>
          <Navbar />
        </div>
        <Switch> 
          <Route exact path='/' component={AboutMe} />
          <Route path='/influences' component={Influences} />
          <Route path='/projects' component={ProjectsComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;
