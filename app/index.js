import React from 'react';
import ReactDOM from 'react-dom';
 
class HelloReact extends React.Component {
  render() {
    return <span>Hello React!</span>;
  }
}
 
ReactDOM.render(<HelloReact/>, document.getElementById('content'));
