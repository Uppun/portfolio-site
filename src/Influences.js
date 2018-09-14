import React, { Component } from 'react';
import './portfolio.css';
import testImg from './assets/testbun.png';
import pkmImg from './assets/pkmblue.png';

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
            <div className='influences-component'>
                <div className='influences-component-section top-section'>
                    <div className='influences-component-content'>
                        <div className={animatedSections > 0 ? 'section-1 animate' : 'section-1'}>
                            <div className='section-images'>
                                <img className="i1" alt='cat1' src="https://placekitten.com/426/240" />
                                <img className="i2" alt='cat2' src="https://placekitten.com/g/640/360" />
                                <img className="i3" alt='cat3' src="https://placekitten.com/640/360" />
                            </div>
                            <div className='section-text'>
                                <h1>
                                Video Games
                                </h1>
                                <p>
                                My introduction to interest in computers came from childhood with a love of video games. From my first love of Pokémon to my obsession with massively multiplayer online games, I not only grew an interest in how these virtual worlds are constructed but how people constructed communities and relationships in and around them. 
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
                                As one would expect from a curiosity on how video games are constructed, I was naturally led into an interest in coding and how they functioned on a technical level. As a consequence I ended up majoring and graduating from the University of Oregon with a bachelors in computer science. 
                                </p>
                            </div>
                            <div className='section-images'>
                                <img className="i1" alt='cat1' src="https://placekitten.com/426/240" />
                                <img className="i2" alt='cat2' src="https://placekitten.com/g/640/360" />
                                <img className="i3" alt='cat3' src="https://placekitten.com/640/360" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='influences-component-section bottom-section'>
                    <div className='influences-component-content'>
                        <div className={animatedSections > 2 ? 'section-3 animate' : 'section-3'}>
                            <div className='section-images'>
                                <img className="i1" alt='cat1' src="https://placekitten.com/426/240" />
                                <img className="i2" alt='cat2' src="https://placekitten.com/g/640/360" />
                                <img className="i3" alt='cat3' src="https://placekitten.com/640/360" />
                            </div>
                            <div className='section-text'>
                                <h1>
                                Section 3
                                </h1>
                                <p>
                                i love kittens
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }  
}