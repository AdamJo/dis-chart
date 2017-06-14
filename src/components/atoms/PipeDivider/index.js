import React, { Component } from 'react';
import style from './index.css'

const PipeDivider = class PipeDivider extends Component {
  render() {
    return (
      <div className={style.pipeDivider}>
        |
      </div>
    )
  }
};

export default PipeDivider;