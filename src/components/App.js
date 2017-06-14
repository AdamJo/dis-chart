import React, { Component } from 'react';
import style from './App.css';
import Header from './organisms/Header/';
import Chart from './organisms/Chart/';

import { mockData } from '../mockData/'

// redux
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/chart';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.actions.pageCount(10);
    this.props.actions.pageNumber(1);
    this.props.actions.loadData(mockData);
    this.props.actions.sort('First Name');
  }

  render({...props}) {
    return (
      <div className={style.App}>
        <Header />
        <Chart {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    chart: state.chart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
