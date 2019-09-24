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
    };

    componentDidMount() {
        this._sectionAnimationTimeout = setTimeout(this.animateNextSection, 500);
    }

    componentWillUnmount() {
        clearTimeout(this._sectionAnimationTimeout);
    }

    animateNextSection = () => {
        const animatedSections = this.state.animatedSections + 1;
        this.setState({animatedSections});
        if (animatedSections < 3) {
          this._sectionAnimationTimeout = setTimeout(this.animateNextSection, 2000);
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
                                My interest in computers and programming came from a love of video games from childhood. A passion for playing them from an early age developed into a desire to learn how they were made, and to one day make one of my own.
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
                                While I was definitely interested in game development, my first interaction with programming actually came from Warcraft 3's map editor. It was very rudementary, but it without really having an option for it in school, it became my primary means of learning basic programming. By the time I reached college there was no question, I wanted to study computer science.
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
                                With my obsessions of computers and gaming, my life quickly revolved around it. Growing up in rural southern isolation provided few chances for making friends. Eventually I was allowed online and immediately began meeting people who also shared a love of gaming. It was thanks to online games in particular, despite how user unfriendly they used to be, that I realized how great online communities can be and with that came a love of working to foster them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }  
}