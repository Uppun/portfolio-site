import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import './portfolio.css';

const ProjectItems = [
    {
        title: 'Pathfinding Grid',
        description: 'A grid-based implementation of two pathfinding algorithms: A* and D* Lite. You can generate a random grid or manually craft your own to experiment with. An optional "fog of war" system examines how the pathfinding works with unknown territory.',
        footer: 'Created with JS/React and flux.'
    },
    {
        title: 'Event Planner',
        description: 'This is also a project',
        footer: "oof"
    },
    {
        title: 'Project2',
        description: 'More projects',
        footer: "oof"
    },
    {
        title: 'Project3',
        description: 'Wew',
        footer: "oof"
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
                    {ProjectItems.map(project => {
                        const {title, description, footer} = project;
                        return <ProjectItem title={title} description={description} footer={footer} />
                    })}
                </div>
                <div className='project-component-footer'>
                    <a href={githubURL} target="_blank">
                        <div className='footer-string'>
                            {footerString}
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}