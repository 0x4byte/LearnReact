import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const element = props => {
  if(props.show) {
    return <div>huang</div>
  }

  return <div>yonglin</div>
}

const forEachTest = () => {
  const data = list.map(item => {
    return <div>item.name</div>
  });
  // [<div>a</div>, <div>b</div>]

  const element = <div>{ data }</div>
}

const element = <div>{ a === 1 ? 'aaa' : 'bbb' }</div>

// old
// const Clock = props => {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// const tick = () => {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// new
class Clock extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
