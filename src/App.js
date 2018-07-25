import React from 'react';
// import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super();
    this.state = {thingsToDo: [], temp: "", clicked : false};
  }

  handleInputChange = event => {
    const {thingsToDo} = this.state;
    let newItem = event.target.value; 
    thingsToDo.push(newItem);
  }

  handleChange = event => {
    this.setState(
      {temp: event.target.value}
    )
  }

  handleEnter = event => {
    const {thingsToDo} = this.state;
     
    if(event.keyCode === 13 ){
      this.setState({clicked: false});
      thingsToDo.push(event.target.value);
      this.setState({thingsToDo:thingsToDo, temp: ""}) 
    }


  }
  handleClick = event => {
    this.setState({clicked: true});
    const {thingsToDo} = this.state;
    thingsToDo.push(this.state.temp);
    this.setState({thingsToDo:thingsToDo, temp: ""});

  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        
        <p>{this.state.temp}</p>
        <ul> 
          {this.state.thingsToDo.map(thing => <TodoList thingToDo = {thing}/> )}
        </ul>
        <Todo handleClick = {this.handleClick} handleenter = {this.handleEnter} value={this.state.temp} onChange={this.handleChange} />
        
      </div>
    );
  }
}

export default App;
