import React, { Component } from 'react';
import './src/index.css';

// this portion trigger onChnage; refer to render()
// assigns key to the elements of chores using both 'item' + 'index' values and display 'item'
const ChoresList = props => {
  return (
    <div>
      <h3 class="blue">{props.newChore}</h3>
      {props.chores.map((item, index) => (
        <h2 onClick={App.strikeThrough} key={item + index}>{item}</h2>
      ))}
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      newChore : "",
      chores:[]
    };
  }
    // setState == refresh of the state
  handleAddChore = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // destructuring assignment of chores to this.state
  // push from chores to this.state.newChore
  // refresh chores; refresh newchores as ""
  handleSubmitChore = e => {
    const { chores } = this.state;
    chores.push(this.state.newChore);
    this.setState({ chores, newChore: "" });
  }
  
  // need to fix this one
  strikeThrough = e => {
    console.log('this is working')
    let choreList = this.state.chores
    for (let i = 0; i < choreList.length; i++) {
      choreList[i].style.setProperty("text-decoration", "line-through");
    }
  }

  render() {
    return (
      <div>
        <h1>Your To Do List:</h1>
        <ChoresList {...this.state} />
        <input type="text" name="newChore" value={this.state.newChore} placeholder="Write it down" onChange={this.handleAddChore} />
        <button onClick={this.handleSubmitChore}>Add it to your list</button>
      </div>
    );
  }
}

export default App;
