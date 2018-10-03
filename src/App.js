import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer/AppContainer';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <AppContainer />
      </div>
    );
  }
}

export default App;
