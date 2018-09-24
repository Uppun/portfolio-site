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

const ProjectItems = [
    {
        title: 'Pathfinding Grid',
        description: 'A grid-based implementation of two pathfinding algorithms: A* and D* Lite. You can generate a random grid or manually craft your own to experiment with. An optional "fog of war" system examines how the pathfinding works with unknown territory.',
        footer: 'Created with Node.js/React and flux.',
        staticImage: pathfindstatic,
        animatedImage: pathfindanimated,
        url: 'https://Uppun.github.io/Grid-Pathfinding',
    },
    {
        title: 'Conway\'s Game of Life',
        description: 'A grid-based implementation of Conway\'s Game of Life. Select cells to fill by clicking on them, press update to advance to the next generation. A cell only survive if it has 2 to 3 neighbors, and it will reproduce with 3. Any other amount will result in it\'s death.',
        footer: "Created with Node.js/React and flux.",
        staticImage: conwaystatic,
        animatedImage: conwayanimated,
        url: 'https://uppun.github.io/Conway-s-Game-of-Life',
    },
    {
        title: 'Turn Based Project',
        description: 'A small turn based rpg-style combat simulator client as well as a server that generates and keeps track of the battle state using a database. Built to try out full-stack development.',
        footer: "Client written with Node.js/React and flux. Server written in node, database is mongoDB.",
        staticImage: gamestatic,
        animatedImage: gameanimated,
        url: 'https://Uppun.github.io/Uppun-Game',
    },
    {
        title: 'Portfolio Site',
        description: 'The source code for this portfolio site!',
        footer: "Written in Node.js/React",
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
            <div className='project-component'>
                <h1>Projects</h1>
                <div className='project-listing'>
                    {ProjectItems.map((project, index) => {
                        const {title, description, footer, staticImage, animatedImage, url} = project;
                        return <ProjectItem key={index} title={title} description={description} footer={footer} static={staticImage} animated={animatedImage} url={url} />
                    })}
                    <div className='project-component-footer'>
                        <a href={githubURL}>
                            <div className='footer-string'>
                                <img src={githubLogo} alt="githublogo" className='github-logo' />
                                {footerString}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}