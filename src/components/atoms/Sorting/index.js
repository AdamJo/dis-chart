import React, { Component } from 'react';
import style from './index.css'

const Sorting = class Sorting extends Component {
  render() {
    return (
      <div>
        <span className={style.sorting}>Sort by: </span>
        <select className={style.sortingSelector}  value={this.props.sortValue} onChange={this.props.sort}>
          <option value="First Name" defaultValue>First Name</option> 
          <option value="Last Name">Last Name</option>
          <option value="Country">Country</option>
          <option value="City">City</option> 
          <option value="State">State</option>
        </select>
      </div>
    )
  }
};

export default Sorting;