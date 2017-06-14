import React, { Component } from 'react';
import style from './index.css';
import shortid from 'shortid';

const navOptions = ['Nav Item 1', 'Nav Item 2', 'Nav Item 3'];

const activeButton = function(e) {
  let navs = Array.from(document.querySelectorAll('a div'));
  navs.map(data => {
    data.classList.remove(style.active);
  });
  e.target.classList.add(style.active);
};

// TODO () add active on click

const Header = class Header extends Component {
  render({ ...props }) {
    return (
      <div className={style.header}>
        {navOptions.map(data => {
          return (
            <a
              key={shortid.generate()}
              className={style.link}
              onClick={activeButton}
            >
              <div>{data}</div>
            </a>
          );
        })}
      </div>
    );
  }
};

export default Header;
