import React, { Component } from 'react';
import './portfolio.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import testImg from './assets/testbun.png';

export default class Influences extends Component {
  render() {
            return(
            <div className='influences-component'>
                    <div className='influences-component-section top-section'>
                        <div className='influences-component-content'>
                            <CSSTransition
                                in={true} 
                                timeout={1000}
                                unmountOnExt={true}
                                classNames='right-slide'
                            >
                                <img src={testImg} alt='infimg' className='influence-image' />
                            </CSSTransition>
                        </div>
                    </div>
                    <div className='influences-component-section middle-section'>
                        <div className='influences-component-content'>
                            <CSSTransition timeout={1000} classNames='left-slide'>
                                <img src={testImg} alt='infimg' className='influence-image' />
                            </CSSTransition>
                        </div>
                    </div>
                    <div className='influences-component-section bottom-section'>
                        <div className='influences-component-content'>
                            <CSSTransition timeout={1000} classNames='right-slide'>
                                <img src={testImg} alt='infimg' className='influence-image' />
                            </CSSTransition>
                        </div>
                    </div>
            </div>
        )
}  
}