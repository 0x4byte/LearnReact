import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoChildClass extends PureComponent {
  state = {};

  handleClick = () => {
    const { data, onClick } = this.props;

    onClick(data);
  }

  render() {
    const { data } = this.props;

    console.log('TodoChild render....');

    return (
      <div>
        <button onClick={this.handleClick}>{data.name}</button>
      </div>
    );
  }
}

TodoChildClass.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
};

export default TodoChildClass;
