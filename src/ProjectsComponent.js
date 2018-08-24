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
        return(
            <div className='project-component'>
                {ProjectItems.map(project => {
                    const {title, description} = project;
                    return <ProjectItem title={title} description={description} />
                })}
            </div>
        )
    }
}