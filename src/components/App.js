import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div id="root">
      <h1>Welcome to React</h1>
      <p>I am learning React. My life is getting better.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
