import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment } from '../reducer';

class CounterContainer extends Component {
  static propTypes = {
    total: PropTypes.number,
    increment: PropTypes.func,
  }

  handleClick = () => {
    const { increment } = this.props;

    increment();
  }

  render() {
    const { total } = this.props;

    return (
      <div>
        <span>CounterContainer: { total }</span>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default connect(state => ({
  total: state.example1.total,
}), { increment })(CounterContainer);
