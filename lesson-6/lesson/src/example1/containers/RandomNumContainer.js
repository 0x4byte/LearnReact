import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setRandomNum } from '../reducer';

class RandomNumContainer extends Component {
  static propTypes = {
    setRandomNum: PropTypes.func,
    randomNum: PropTypes.number,
  }

  handleClick = () => {
    this.props.setRandomNum(Math.random() * 10);
  }

  render() {
    const { randomNum } = this.props;

    return (
      <div>
        <span>RandomNumContainer: { randomNum }</span>
        <button onClick={this.handleClick}>获取随机数</button>
      </div>
    );
  }
}

export default connect(state => ({
  randomNum: state.example1.randomNum,
  total: state.example1.total,
}), { setRandomNum })(RandomNumContainer);
