import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
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
    //this.setState({thingsToDo:thingsToDo}); 
    console.log(this.state); 
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState(
      {temp: event.target.value}
    )
  }

  handleEnter = event => {
    const {thingsToDo} = this.state;
    console.log(this.state);
     
    if(event.keyCode === 13 || this.state.clicked){
      this.setState({clicked: false});
      thingsToDo.push(event.target.value);
      this.setState({thingsToDo:thingsToDo}) 
      console.log("enter key pressed");
      console.log(this.state)
    }

    

  }
  handleClick = event => {
    console.log("clicked");
    this.setState({clicked: true});
    // const {thingsToDo} = this.state;
    // thingsToDo.push(event.target.value);
    // this.setState({thingsToDo:thingsToDo});
  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        
        <p>{this.state.temp}</p>
        <input type="text" value={this.state.temp} onChange={this.handleChange} />
        <ul> 
    {this.state.thingsToDo.map(thing => <TodoList thingToDo = {thing}/> )}
        </ul>
        <Todo handleClick = {this.handleClick} handleenter = {this.handleEnter}/>
        
      </div>
    );
  }
}

export default App;
