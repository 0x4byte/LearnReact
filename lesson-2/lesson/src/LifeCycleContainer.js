import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LifeCycle from './LifeCycle';

class LifeCycleContainer extends Component {
  state = {
    show: true,
    count: 0,
  }

  handleClick = () => {
    this.setState({ show: !this.state.show });
  }

  handleChange = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { show, count } = this.state;

    return (
      <div>
        { show ? <LifeCycle count={count} /> : null }
        <div>
          <button onClick={this.handleChange}>count计数</button>
        </div>
        <div>
          <button onClick={this.handleClick}>点击切换LifeCycle Component</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <LifeCycleContainer />,
  document.getElementById('root')
);