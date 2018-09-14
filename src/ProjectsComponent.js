import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import './portfolio.css';
import test1 from './assets/bunnydoggo.png';
import test2 from './assets/testbun.png';
import githubLogo from './assets/githublogo.png';

const ProjectItems = [
    {
        title: 'Pathfinding Grid',
        description: 'A grid-based implementation of two pathfinding algorithms: A* and D* Lite. You can generate a random grid or manually craft your own to experiment with. An optional "fog of war" system examines how the pathfinding works with unknown territory.',
        footer: 'Created with JS/React and flux.',
        staticImage: test2,
        animatedImage: test1,
        url: 'https://Uppun.github.io/Grid-Pathfinding',
    },
    {
        title: 'Event Planner',
        description: 'This is also a project',
        footer: "oof",
        staticImage: test2,
        animatedImage: test1,
        url: 'https://Uppun.github.io/Grid-Pathfinding',
    },
    {
        title: 'Project2',
        description: 'More projects',
        footer: "oof",
        staticImage: test2,
        animatedImage: test1,
        url: 'https://Uppun.github.io/Grid-Pathfinding',
    },
    {
        title: 'Project3',
        description: 'Wew',
        footer: "oof",
        staticImage: test2,
        animatedImage: test1,
        url: 'https://Uppun.github.io/Grid-Pathfinding',
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