import React, { Component } from 'react';
import style from './index.css'

const Button = class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addPlayer} className={style.button}>Add Player</button>
        <input name="inputName"/>
      </div>
    )
  }
};

export default Button;