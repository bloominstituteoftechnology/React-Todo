import React from 'react';
import './App.css';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  //#region you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  //#endregion this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state={
      goals: ["placeholder", 2],
      temp: "",
      message: ""
    };
  }

  inputFunction = (event) => {
    this.setState({temp: event.target.value});//store input in temporary space.
  }

  render() {
    return (
    <div>

      <div className="display">
        <h1>Just Do It! {this.state.message} <span>the list.</span></h1>
        <hr/> 
        
        <div className="list">
          <TodoForm inputHandler={this.inputFunction}/>
          <h2 className="goals">Goals</h2>
          <div className="list_items">PlaceHolder</div>
        </div>
      </div>

    </div>
    );
  }
}
export default App;
