import React from 'react';
import './App.css';
import InputContainer from './components/InputContainer/InputContainer';




class App extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <InputContainer />
      </div>
    );
  }
}

export default App;
