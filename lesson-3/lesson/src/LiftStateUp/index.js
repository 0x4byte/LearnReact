import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import Hi from './Hi';
import Hello from './Hello';

class App extends Component {
  state = {
    name: '',
  }

  handleChange = value => {
    this.setState({
      name: value,
    });
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <Input onChange={this.handleChange} />
        <Hi name={name} />
        <br />
        <Hello name={name} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
