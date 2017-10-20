import React from 'react';
import PropTypes from 'prop-types';

const TodoChildFunc = ({ name, onClick }) => {
  console.log('TodoChild render....');

  return (
    <div>
      <button onClick={onClick}>{name}</button>
    </div>
  );
}

TodoChildFunc.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default TodoChildFunc;
