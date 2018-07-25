import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
    };
  }
  render() {
    return (
      <div>
        <h2>Simple Change to Open PR!</h2>
      </div>
    );
  }
}

export default App;
