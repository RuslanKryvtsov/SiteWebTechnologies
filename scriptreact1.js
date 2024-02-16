const React = require('react');
const ReactDOM = require('react-dom');
const StateAndPropsDemo = require('./D:/test3/StateAndPropsDemo');


ReactDOM.render(
  React.createElement(React.StrictMode, null, React.createElement(StateAndPropsDemo, null)),
  document.getElementById('root')
);


