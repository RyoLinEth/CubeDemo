import React from 'react';
import ReactDOM from 'react-dom';
import Cube from './components/Cubes/Cube';
import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation';

const App = () => {
  return (
    <div>
      {/* <h1>Hello, world!</h1> */}
      {/* <LoadingAnimation /> */}
      <Cube />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
