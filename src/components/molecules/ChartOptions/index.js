import React, { Component } from 'react';
import style from './index.css';

import ArrowLeft from '../../atoms/ArrowLeft';
import ArrowRight from '../../atoms/ArrowRight';
import ItemsPerPage from '../../atoms/ItemsPerPage';
import PageNumber from '../../atoms/PageNumber';
import PipeDivider from '../../atoms/PipeDivider';
import Sorting from '../../atoms/Sorting';
import Title from '../../atoms/Title';

const ChartOptions = class ChartOptions extends Component {
  render() {
    return (
      <div className={style.chartOptions}>
        <div>
          <Title />
          <PipeDivider />
          <Sorting
            sort={this.props.actions.sort}
            sortValue={this.props.chart.sort}
          />
        </div>
        <div>
          <ItemsPerPage
            pageCount={this.props.actions.pageCount}
            pageCountValue={this.props.chart.pageCount}
          />
          <PageNumber
            pageNumber={this.props.chart.pageNumber}
            pageCount={this.props.chart.pageCount}
            dataCount={this.props.chart.data}
          />
          <ArrowLeft decrement={this.props.actions.decrement} />
          <ArrowRight increment={this.props.actions.increment} />
        </div>
      </div>
    );
  }
};

export default ChartOptions;
