import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { increment, setClickTime } from '../reducer';

const getTotal = state => state.example2.total;
const formatTotal = createSelector(
  [getTotal],
  (total) => {
    console.log('call formatTotal()');

    return total + 10;
  },
);

class CounterOptimizeContainer extends Component {
  static propTypes = {
    total: PropTypes.number,
    increment: PropTypes.func,
    clickTime: PropTypes.string,
    setClickTime: PropTypes.func,
    formatTotal: PropTypes.number,
  }

  handleClick = () => {
    const { increment } = this.props;

    increment();
  }

  handleTimeClick = () => {
    const { setClickTime } = this.props;

    setClickTime(new Date().toString());
  }

  render() {
    const { total, clickTime, formatTotal } = this.props;

    return (
      <div>
        <span>CounterContainer: { total }</span>
        <button onClick={this.handleClick}>+</button>

        <div>格式化后的total: { formatTotal }</div>
        <div>格式化后的total2: { formatTotal }</div>

        <button onClick={this.handleTimeClick}>获取点击时间: { clickTime }</button>
      </div>
    );
  }
}

export default connect(state => ({
  total: state.example2.total,
  clickTime: state.example2.clickTime,
  formatTotal: formatTotal(state),
}), { increment, setClickTime })(CounterOptimizeContainer);
