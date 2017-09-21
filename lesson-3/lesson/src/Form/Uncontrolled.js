import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <div style={{ border: '1px dashed', padding: 10, }}>
        <h3>非受控组件</h3>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" defaultValue="哈哈" ref={(input) => this.input = input} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NameForm;
