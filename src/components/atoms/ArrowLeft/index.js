import React, { Component } from 'react';
import style from './index.css'

const ArrowLeft = class ArrowLeft extends Component {
  render() {
    return (
      <div className={style.leftArrow} onClick={this.props.decrement}>
        {'<'}
      </div>
    )
  }
};

export default ArrowLeft;