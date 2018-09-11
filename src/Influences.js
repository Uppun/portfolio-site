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
                                <img class="i1" alt='cat1' src="https://placekitten.com/426/240" />
                                <img class="i2" alt='cat2' src="https://placekitten.com/g/640/360" />
                                <img class="i3" alt='cat3' src="https://placekitten.com/640/360" />
                            </div>
                            <div className='section-text'>
                                <h1>
                                Section 1
                                </h1>
                                <p>
                                i love kittens aaaaaaaaaaaaaaaaaaaaaa what is this ooooooooo aaaaaaaaaa eeeeeeeeeeee
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
                                Section 2
                                </h1>
                                <p>
                                phbbbbbbbbbbbbbtthese kittens sure are cute eeeeeeeeeeeeeeee wooooooo
                                </p>
                            </div>
                            <div className='section-images'>
                                <img class="i1" alt='cat1' src="https://placekitten.com/426/240" />
                                <img class="i2" alt='cat2' src="https://placekitten.com/g/640/360" />
                                <img class="i3" alt='cat3' src="https://placekitten.com/640/360" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='influences-component-section bottom-section'>
                    <div className='influences-component-content'>
                        <div className={animatedSections > 2 ? 'section-3 animate' : 'section-3'}>
                            <div className='section-images'>
                                <img class="i1" alt='cat1' src="https://placekitten.com/426/240" />
                                <img class="i2" alt='cat2' src="https://placekitten.com/g/640/360" />
                                <img class="i3" alt='cat3' src="https://placekitten.com/640/360" />
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