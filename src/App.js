import React, { useEffect, useState } from 'react';
import ProjectsComponent from './ProjectsComponent';
import AboutMe from './AboutMe';
import Influences from './Influences';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';

function App() {

  const [active, setActive] = useState('red');

  const handleScroll = () => {
    const scrollPos = window.pageYOffset;
    const pages = document.getElementById('pages').children;
    for (const page of pages) {
      const {y, height} = page.getBoundingClientRect();
      const style = getComputedStyle(page);
      const trueHeight = height + parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
      if (y < scrollPos && (y + trueHeight) >= scrollPos) {
        setActive(page.id);
      }
    }
  }

  useEffect(() => {
    if (window.location.hash) {
      setActive(window.location.hash.substr(1));
    }

    document.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='portfolio-components'>
      <div className='navbar-wrapper'>
        <Navbar active={active}/>
      </div>
      <div id='pages'>
          <AboutMe />
          <Influences />
          <ProjectsComponent />
      </div>
    </div>
  );
}

export default App;
