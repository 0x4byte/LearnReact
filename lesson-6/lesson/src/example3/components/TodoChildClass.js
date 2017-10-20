import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoChildClass extends PureComponent {
  state = {};

  render() {
    const { name, onClick } = this.props;

    console.log('TodoChild class render....');

    return (
      <div>
        <button onClick={onClick}>{name}</button>
      </div>
    );
  }
}

TodoChildClass.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default TodoChildClass;
