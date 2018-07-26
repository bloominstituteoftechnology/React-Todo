import React from 'react';
// import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import './app.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super();
    this.state = {thingsToDo: [], temp: "", count: 0, key: "thing_", completed: {}, };
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
    let count = this.state.count;
    let key = this.state.key;  
    if(event.keyCode === 13 ){ 
      //thingsToDo.push(event.target.value);
      thingsToDo.push({task: this.state.temp, id: Date.now(), completed: false})
      // {task: this.state.temp, id: Date.now(), completed: false}
      this.setState({thingsToDo:thingsToDo, temp: "", count: count, key: key});
    }

  }

  handleClick = event => {
    let count = this.state.count; 
    let key = this.state.key; 
    const {thingsToDo} = this.state;
    //thingsToDo.push(this.state.temp);
    thingsToDo.push({task: this.state.temp, id: Date.now(), completed: false});
    this.setState({thingsToDo:thingsToDo, temp: "", count: count, key: key});
  }

  handleLiClick = event => {
    event.target.style.textDecoration === "line-through" ? event.target.style.textDecoration = 'none': event.target.style.textDecoration = "line-through";
    
    //event.class === 'completed' ? event.class = 'unCompleted' : event.class = 'completed'
     

    event.target.className === 'completed' ? event.target.className = 'unCompleted' : event.target.className = 'completed'
    let indx = this.state.thingsToDo.indexOf(event.target.innerHTML);
    let thing = event.target.innerHTML; 
    let completed = this.state.completed;
    if (event.target.className === 'completed'){ 
      completed[indx] = thing;

      this.setState({completed:completed});
    } else {
      if(completed.hasOwnProperty(indx.toString())){
       delete completed[indx];

       this.setState({completed:completed});
      
      }
     }
     console.log(event.className)

}

  handleClearClick = () => {
    
    const things = Object.values(this.state.completed);
    let thingsToDo = this.state.thingsToDo 
    thingsToDo = thingsToDo.filter( thing => !things.includes(thing.task));
    
    this.setState({thingsToDo: thingsToDo}); 
  }


  render() {
    return (
      <div className = "appContainer">
        <h1>Todo List: MVP</h1>
        
        <ul>   
          {this.state.thingsToDo.map(thing => <TodoList thingToDo = {thing.task} handleLiClick = {this.handleLiClick} completed ={this.state.completed}
          key={thing.id} /> )}
          {this.state.temp}
        </ul>
        <Todo handleClick = {this.handleClick} handleenter = {this.handleEnter} value={this.state.temp}
         onChange={this.handleChange}  handleClearClick = {this.handleClearClick} 
         />
        
      </div>
    );
  }
}

export default App;
