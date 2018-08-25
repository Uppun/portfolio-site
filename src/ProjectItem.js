import React, { Component } from 'react';

export default class ProjectItem extends Component {
    render() {
        return(
            <div className="project-item">
                <div className='project-item-preview'>
                </div>
                <div className='project-item-contents'>
                    <div className='project-item-title'>
                        {this.props.title}
                    </div>
                    <div className='project-item-description'>
                        <p>{this.props.description}</p>
                        <p>{this.props.footer}</p>
                    </div>
                </div>
            </div>
        )
    }
}