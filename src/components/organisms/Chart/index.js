import React, { Component } from 'react';
import style from './index.css';
import ChartOptions from '../../molecules/ChartOptions';
import ListHeader from '../../molecules/ListHeader';
import ChartRow from '../../molecules/ChartRow';

function pageCounter(data, pageCount, pageNumber) {
  let startPage = pageNumber > 1 ? (pageNumber - 1) * pageCount : 1;
  let endPage = pageNumber > 1 ? pageCount * pageNumber : pageCount + 1;
  console.log(startPage, endPage);
  if (data) {
    return data.slice(startPage - 1, endPage);
  } else {
    return [];
  }
}

const Chart = class Chart extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.chart}>
          <ChartOptions {...this.props} />
          <ListHeader />
          <ChartRow
            data={pageCounter(
              this.props.chart.data,
              this.props.chart.pageCount,
              this.props.chart.pageNumber,
            )}
          />
        </div>
      </div>
    );
  }
};

export default Chart;
