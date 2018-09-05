import React, { Component } from 'react';
import './portfolio.css';
import { CSSTransition } from 'react-transition-group';
import testImg from './assets/testbun.png';
import pkmImg from './assets/pkmblue.png';

export default class Influences extends Component {
  render() {
        return(
            <div className='influences-component'>
                    <div className='influences-component-section top-section'>
                        <div className='influences-component-content'>
                            <CSSTransition
                                in={true}
                                appear={true} 
                                timeout={1000} 
                                classNames='right-slide'
                            >
                                <p>
                                    <img src={pkmImg} alt='firstImg' className='influence-image' align='left' />
                                    Lorem ipsum dolor sit amet, illum abhorreant an vel, ad vide porro nostrum nec. Saepe insolens vituperata ius at, vel elitr ludus ne, populo audiam ei nam. Essent audiam te mei, errem quidam ei nec. In option oblique vis, everti aperiam mei at, est ne velit oblique volutpat. Ex malorum eleifend nam, fugit voluptua ei vix.
                                </p>
                            </CSSTransition>
                        </div>
                    </div>
                    <div className='influences-component-section middle-section'>
                        <div className='influences-component-content'>
                            <CSSTransition
                                in={true}
                                appear={true} 
                                timeout={1000} 
                                classNames='left-slide'
                            >
                                <p>
                                    <img src={testImg} alt='infimg' className='influence-image' align='right' />
                                    Lorem ipsum dolor sit amet, illum abhorreant an vel, ad vide porro nostrum nec. Saepe insolens vituperata ius at, vel elitr ludus ne, populo audiam ei nam. Essent audiam te mei, errem quidam ei nec. In option oblique vis, everti aperiam mei at, est ne velit oblique volutpat. Ex malorum eleifend nam, fugit voluptua ei vix.
                                </p>
                            </CSSTransition>
                        </div>
                    </div>
                    <div className='influences-component-section bottom-section'>
                        <div className='influences-component-content'>
                            <CSSTransition
                                in={true}
                                appear={true} 
                                timeout={1000} 
                                classNames='right-slide'
                            >
                                <p>
                                    <img src={testImg} alt='infimg' className='influence-image' align='left' />
                                    Lorem ipsum dolor sit amet, illum abhorreant an vel, ad vide porro nostrum nec. Saepe insolens vituperata ius at, vel elitr ludus ne, populo audiam ei nam. Essent audiam te mei, errem quidam ei nec. In option oblique vis, everti aperiam mei at, est ne velit oblique volutpat. Ex malorum eleifend nam, fugit voluptua ei vix.
                                </p>
                            </CSSTransition>
                        </div>
                    </div>
            </div>
        )
    }  
}