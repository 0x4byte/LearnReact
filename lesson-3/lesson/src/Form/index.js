import React from 'react';
import ReactDOM from 'react-dom';
import Controlled from './controlled';
import MultiControlled from './multiControlled';
import UnControlled from './uncontrolled';

const App = () => {
  return (
    <div>
      <Controlled />
      <br />
      <MultiControlled />
      <br/>
      <UnControlled />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
