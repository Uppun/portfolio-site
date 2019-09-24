import React, { Component } from 'react';
import './portfolio.css';
import backgrounds from './assets/backgrounds';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default class AboutMe extends Component {
    state = {currentBackground: 0};

    componentDidMount() {
        this.interval = setInterval(this.updateBackground, 10000);
    }

    updateBackground = () => {
        this.setState({
            currentBackground: (this.state.currentBackground + 1) % backgrounds.length,
        });
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const githubURL = "https://github.com/Uppun";
        const resumeURL = "https://www.youtube.com/watch?v=FC4Kun_BimM"; 
        return(
            <div id='home' className='background-pages'>
                <TransitionGroup className='background-slide'>
                    {backgrounds.map((background, index) => {
                        if (index === this.state.currentBackground) {
                            return (
                                <CSSTransition key={index} timeout={2000} classNames='switch'>
                                    <BackgroundPage style={{backgroundImage: 'url(' + backgrounds[index] + ')'}} />
                                </CSSTransition>
                            )
                        } else {
                            return null;
                        }
                    })}
                </TransitionGroup>
                <div className='landing-text'>
                    <h1>Jonathan Wright</h1>
                    <span>Software Engineer</span>
                    <span><a href={githubURL}>GitHub</a> | <a href={resumeURL}>Resume</a></span>
                </div>
            </div>
        );
    }
}

class BackgroundPage extends Component {
    render() {
        return (
            <div className='landing-background' style={{backgroundImage: this.props.style.backgroundImage}} />
        );
    }
}