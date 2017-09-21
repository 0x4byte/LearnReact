import React, { Component } from 'react';

class Input extends Component {
  state = {
    value: '',
  }

  handleChange = event => {
    const { onChange } = this.props;
    const value = event.target.value;

    this.setState({
      value,
    });
    onChange && onChange(value);
  }

  render() {
    const { value } = this.state

    return (
      <div>
        <input value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Input;
