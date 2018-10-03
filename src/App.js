import React from 'react';
import './App.css';

class App extends React.Component {
  //#region you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  //#endregion this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state={};
  }
  
  render() {
    return (
    <div>
        <div className="display">
            <h1>Just Do It! <span>the list.</span></h1>
            <hr/>

            <div className="listview">
              <form className="form">
                <input className="inputform" placeholder="What is your goal?"/>
                <div className="actionbuttons">
                  <button className="addtodo button">Add Todo</button>
                  <button className="clear button">Clear list</button>
                </div>
              </form>
              
              <div className="listitems">
                <h2 className="theGoal">Goals</h2>
                <div className="goals">
                  <ul>
                    <li>sometodo</li>
                  </ul>
                </div>

                <div>

                </div>
              </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
