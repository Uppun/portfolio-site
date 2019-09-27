import React, { Component } from 'react';
import './portfolio.css';
import pkmImg from './assets/pkmblue.png';
import cabilis from './assets/cabilis05.png'
import tf2 from './assets/tfw.png';
import bunnies from './assets/bunnies.png';
import sigmaclear from './assets/sigmaclear.png';
import pso2 from './assets/pso2.bmp';
import worldedit from './assets/WorldEditor.png';
import code from './assets/code.png';
import deschutes from './assets/deschutes.png';

export default class Influences extends Component {
    state = {
        animatedSections: 0,
        hasAnimated: false,
    };

    componentDidMount() {
        const {active} = this.props;
        if (active === 'influences') {
            this._sectionAnimationTimeout = setTimeout(this.animateNextSection, 50);
            this.setState({hasAnimated: true});
        }
    }

    componentDidUpdate(prevProps) {
        const {hasAnimated} = this.state;
        const {active} = this.props;
        if (active === 'influences' && !hasAnimated) {
            this._sectionAnimationTimeout = setTimeout(this.animateNextSection, 50);
            this.setState({hasAnimated: true});
        }
    }

    animateNextSection = () => {
        const animatedSections = this.state.animatedSections + 1;
        this.setState({animatedSections});
        if (animatedSections < 3) {
          this._sectionAnimationTimeout = setTimeout(this.animateNextSection, 400);
        }
      };

    render() {
        const {animatedSections} = this.state;

        return(
            <div id='influences' className='influences-component'>
                <div className='influences-component-section top-section'>
                    <div className='influences-component-content'>
                        <div className={animatedSections > 0 ? 'section-1 animate' : 'section-1'}>
                            <div className='section-images'>
                                <img className="i1" alt='cat1' src={pkmImg}/>
                                <img className="i2" alt='cat2' src={cabilis} />
                                <img className="i3" alt='cat3' src={tf2} />
                            </div>
                            <div className='section-text'>
                                <h1>
                                Video Games
                                </h1>
                                <p>
                                Gaming has been my primary hobby since childhood. It kindled my desire to program and to one day create games of my own.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='influences-component-section middle-section'>
                    <div className='influences-component-content'>
                        <div className={animatedSections > 1 ? 'section-2 animate' : 'section-2'}>
                            <div className='section-text'>
                                <h1>
                                Programming
                                </h1>
                                <p>
                                The basics of programming were first introduced to me through Warcraft III's map editor. From there I was inspired to major in Computer Science at the University of Oregon.
                                </p>
                            </div>
                            <div className='section-images'>
                                <img className="i1" alt='cat1' src={worldedit} />
                                <img className="i2" alt='cat2' src={code} />
                                <img className="i3" alt='cat3' src={deschutes} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='influences-component-section bottom-section'>
                    <div className='influences-component-content'>
                        <div className={animatedSections > 2 ? 'section-3 animate' : 'section-3'}>
                            <div className='section-images'>
                                <img className="i1" alt='cat1' src={bunnies} />
                                <img className="i2" alt='cat2' src={pso2} />
                                <img className="i3" alt='cat3' src={sigmaclear} />
                            </div>
                            <div className='section-text'>
                                <h1>
                                Community
                                </h1>
                                <p>
                                Living in a fairly isolated part of the country growing up, my primary means of making friends and interacting came with online gaming. Being able to provide a means for communities to interact and grow together is one of my greatest desires.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }  
}