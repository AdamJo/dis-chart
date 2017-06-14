import React, { Component } from 'react';
import style from './index.css';

const PageNumber = class PageNumber extends Component {
  pageCounter(pageCount, pageNumber, data) {
    if (data) {
      data = data.length;
    }
    let startPage = pageNumber > 1 ? (pageNumber - 1) * pageCount : 1;
    let endPage = pageNumber > 1 ? pageCount * pageNumber : pageCount;
    if (endPage >= data) {
      endPage = data;
      startPage = endPage - pageCount;
    }
    return [startPage, endPage, data];
  }

  render() {
    let [start, end, total] = this.pageCounter(
      this.props.pageCount,
      this.props.pageNumber,
      this.props.dataCount,
    );
    return (
      <div className={style.pageNumbers}>
        <span>{start}-{end}</span>
        <div>of</div>
        <span>{total}</span>
      </div>
    );
  }
};

export default PageNumber;
