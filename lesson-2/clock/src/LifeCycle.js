import React, { Component } from 'react';

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 0,
    };

    console.info('LifeCycle constructor call...');
  }

  componentWillMount() {
    console.info('LifeCycle componentWillMount call...');
  }

  componentDidMount() {
    console.info('LifeCycle componentDidMount call...');
  }

  componentWillUnmount() {
    console.info('LifeCycle componentWillUnmount call...');
  }

  componentWillReceiveProps(nextProps) {
    console.info('LiefCycle componentWillReceiveProps call...');
    console.info('nextProps => ', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.info('LiefCycle shouldComponentUpdate call...');
    console.info('nextProps', nextProps);
    console.info('nextState', nextState);

    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.info('LiefCycle componentWillUpdate call...');
    console.info('nextProps', nextProps);
    console.info('nextState', nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.info('LiefCycle componentDidUpdate call...');
    console.info('prevProps', prevProps);
    console.info('prevState', prevState);
  }

  handleSizeChange = () => {
    this.setState({ size: this.state.size + 10 });
  }

  render() {
    console.info('LifeCycle render call...');

    return (
      <div>
        <h1>LifeCycle Component</h1>
        <h2>props.count: {this.props.count}</h2>
        <h2>state.size: { this.state.size }
          <button onClick={this.handleSizeChange}>changeSize</button>
        </h2>
      </div>
    )
  }
}
