import React, { Component } from 'react';

export default class ProjectItem extends Component {
    handleClick = () => {

    }

    render() {
        return(
            <a href={this.props.url}>
                <div className="project-item">
                    <div className='project-item-preview'>
                        <img src={this.props.static} alt="projectImg" className='static-preview-image' />
                        <img src={this.props.animated} alt="animatedprojectImg" className='animated-preview-image' />
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
            </a>
        )
    }
}