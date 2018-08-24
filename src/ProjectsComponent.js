import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import './portfolio.css';

const ProjectItems = [
    {
        title: 'A*',
        description: 'This is a project',
    },
    {
        title: 'Event Planner',
        description: 'This is also a project',
    },
    {
        title: 'Project2',
        description: 'More projects',
    },
    {
        title: 'Project3',
        description: 'Wew',
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
                        const {title, description} = project;
                        return <ProjectItem title={title} description={description} />
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