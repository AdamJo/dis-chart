import React, { Component } from 'react';
import style from './index.css';

const ArrowRight = class ArrowRight extends Component {
  render() {
    return (
      <div className={style.rightArrow} onClick={this.props.increment}>
        {'>'}
      </div>
    );
  }
};

export default ArrowRight;
