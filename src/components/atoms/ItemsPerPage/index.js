import React, { Component } from 'react';
import style from './index.css';

const ItemsPerPage = class ItemsPerPage extends Component {
  render() {
    return (
      <div>
        <div className={style.itemsPerPage}>items per page: </div>
        <select
          name="pageAmount"
          value={this.props.pageCountValue}
          onChange={this.props.pageCount}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
        </select>
      </div>
    );
  }
};

export default ItemsPerPage;
