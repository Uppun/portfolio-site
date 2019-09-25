import React, { useEffect, useState } from 'react';
import ProjectsComponent from './ProjectsComponent';
import AboutMe from './AboutMe';
import Influences from './Influences';
import Navbar from './Navbar';

function App() {

  const [active, setActive] = useState('home');

  const handleScroll = () => {
    const scrollPos = window.pageYOffset;
    const pages = document.getElementById('pages').children;
    for (const page of pages) {
      const {y, height} = page.getBoundingClientRect();
      const style = getComputedStyle(page);
      const trueHeight = height + parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
      if (y < scrollPos && (y + trueHeight) >= scrollPos) {
        setActive(page.id);
        window.history.replaceState(null, null, `#${page.id}`);
        break;
      }
    }
  }

  useEffect(() => {
    if (window.location.hash.startsWith('#/')) {
      const currentHash = window.location.hash.substr(2);
      if (currentHash) {
        setActive(currentHash);
      }
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
          <ProjectsComponent />
          <Influences active={active} />
      </div>
    </div>
  );
}

export default App;
