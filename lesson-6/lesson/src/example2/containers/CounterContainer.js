import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, setClickTime } from '../reducer';

class CounterContainer extends Component {
  static propTypes = {
    total: PropTypes.number,
    increment: PropTypes.func,
    clickTime: PropTypes.string,
    setClickTime: PropTypes.func,
  }

  handleClick = () => {
    const { increment } = this.props;

    increment();
  }

  handleTimeClick = () => {
    const { setClickTime } = this.props;

    setClickTime(new Date().toString());
  }

  get formatTotal() {
    const { total } = this.props;

    console.log('call formatTotal()');
    // 复杂的计算
    return total * 10;
  }

  render() {
    const { total, clickTime } = this.props;

    return (
      <div>
        <span>CounterContainer: { total }</span>
        <button onClick={this.handleClick}>+</button>

        <div>格式化后的total: { this.formatTotal }</div>
        <div>格式化后的total2: { this.formatTotal }</div>

        <button onClick={this.handleTimeClick}>获取点击时间: { clickTime }</button>
      </div>
    );
  }
}

export default connect(state => ({
  total: state.example2.total,
  clickTime: state.example2.clickTime,
}), { increment, setClickTime })(CounterContainer);
