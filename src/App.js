import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {thingsToDo: []};
  }
  handleInputChange = event => {
    const {thingsToDo} = this.state; 
    thingsToDo.push(event.target.value);
    this.setState({thingsToDo:thingsToDo}); 
    console.log(this.state); 
  }


  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <p>{this.state.thingsToDo}</p>
        <TodoList />
        <TodoForm handleInputChange = {this.handleInputChange}/>
        
      </div>
    );
  }
}

export default App;
