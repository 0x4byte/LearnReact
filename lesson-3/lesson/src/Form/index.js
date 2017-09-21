import React from 'react';
import ReactDOM from 'react-dom';
import Controlled from './Controlled';
import MultiControlled from './MultiControlled';
import UnControlled from './Uncontrolled';

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
