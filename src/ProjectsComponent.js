import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import './portfolio.css';
import gamestatic from './assets/gamestatic.png';
import gameanimated from './assets/gameanimated.gif';
import pathfindstatic from './assets/pathfindstatic.png';
import pathfindanimated from './assets/pathfindanimated.gif';
import conwaystatic from './assets/conwaystatic.png';
import conwayanimated from './assets/conwayanimated.gif';
import portfoliostatic from './assets/portfoliostatic.png';
import portfolio from './assets/portfolio.gif';
import githubLogo from './assets/githublogo.png';
import formsanimated from './assets/forms.gif';
import formsstatic from './assets/forms.png';
import gearstatic from './assets/gear.png';
import gearanimated from './assets/gear.gif';

const ProjectItems = [
    {
        title: 'Pathfinding Grid',
        description: 'Implementation of A* and D* Lite. You can generate a random grid or manually craft your own. An optional "fog of war" system examines how the pathfinding works with unknown territory.',
        tags: ['nodejs', 'react', 'flux'],
        staticImage: pathfindstatic,
        animatedImage: pathfindanimated,
        url: 'https://Uppun.github.io/Grid-Pathfinding',
    },
    {
        title: 'Conway\'s Game of Life',
        description: 'Select cells to fill by clicking on them, press update to advance to the next generation. A cell only survive if it has 2 to 3 neighbors, and it will reproduce with 3. Any other amount will result in it\'s death.',
        tags: ['nodejs', 'react', 'flux'],
        staticImage: conwaystatic,
        animatedImage: conwayanimated,
        url: 'https://uppun.github.io/Conway-s-Game-of-Life',
    },
    {
        title: 'Turn Based Project',
        description: 'A small turn based rpg-style combat simulator client as well as a server that generates and keeps track of the battle state using a database. Built to try out full-stack development.',
        tags: ['nodejs', 'react', 'flux', 'express', 'mongodb'],
        staticImage: gamestatic,
        animatedImage: gameanimated,
        url: 'https://Uppun.github.io/Uppun-Game',
    },
    {
        title: 'Discord Forms',
        description: 'A site that allows you to create and share surveys. Authenticates through discord, allowing you to see who answered what based on their discord profile. Requires a discord account to use.',
        tags: ['nodejs', 'react', 'flux', 'express', 'mongodb'],
        staticImage: formsstatic,
        animatedImage: formsanimated,
        url: 'http://discord-forms.herokuapp.com',
    },
    {
        title: 'FFXIV Gear Display',
        description: 'A website that allows you to display gear builds from Ariyala in an easier-to-read fashion than the regular site. Enter the build ID to view the corresponding build.',
        tags: ['nodejs', 'react', 'flux'],
        staticImage: gearstatic,
        animatedImage: gearanimated,
        url: 'https://uppun.github.io/Gear-Displayer/',
    },
    {
        title: 'Portfolio Site',
        description: 'The source code for this portfolio site! A SPA with features like an image carousel, css animations and a navbar with scroll detection.',
        tags: ['nodejs', 'react'],
        staticImage: portfoliostatic,
        animatedImage: portfolio,
        url: 'https://github.com/Uppun/portfolio-site',
    }
]

export default class Projects extends Component {
    render() {
        const footerString = "If you'd like to see more, check out my github here!";
        const githubURL = "https://github.com/Uppun";
        return(
            <div id='projects' className='project-component'>
                <h1>Projects</h1>
                <div className='project-listing'>
                    {ProjectItems.map((project, index) => {
                        const {title, description, tags, staticImage, animatedImage, url} = project;
                        return <ProjectItem key={index} title={title} description={description} tags={tags} static={staticImage} animated={animatedImage} url={url} />
                    })}
                </div>
                <div className='project-component-footer'>
                        <a href={githubURL}>
                            <div className='footer-string'>
                                <img src={githubLogo} alt="githublogo" className='github-logo' />
                                {footerString}
                            </div>
                        </a>
                </div>
            </div>
        )
    }
}