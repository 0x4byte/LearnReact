import React, { Component, PropTypes } from 'react';
import { Button } from 'react-impression';

// 计数器组件
export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  };
  onIncrementHandle = () => {
    let { incrementAsync } = this.props;

    incrementAsync(100);
  };
  render() {
    const { decrement, increment, counter } = this.props;

    return (
      <p>
        Clicked: {counter} times
        {' '}
        <Button onClick={() => increment()}>+</Button>
        {' '}
        <Button theme="secondary" onClick={decrement}>-</Button>
        {' '}
        <Button theme="default" onClick={this.onIncrementHandle}>+100</Button>
        {' '}
      </p>
    );
  }
}
