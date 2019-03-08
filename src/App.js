import React from 'react';
import './components/TodoComponents/Todo.css';

let collectCompleted = [];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      toDoList: [],
      task: "",
      id: "",
      completed: "",
    };
  }

  toDoListHandler = event => {
    this.setState({[event.target.name]: event.target.value});
    
  };

  toDoListSubmit = event => {
    event.preventDefault();
    let toDo = {
      task: this.state.task,
      id: Date.now(),
      completed: false,
    };
    this.setState(prevState => {
      return{
        toDoList: [...prevState.toDoList, toDo],
        task: "",
        id: "",
        completed: false,
        
      };      
    });
    
  }
  clearCompleted = event =>{
    event.preventDefault();
    console.log(this.state.toDoList)
    console.log(collectCompleted)
    this.setState(prevState => {
      return(
        this.state.toDoList.filter((item) => {
          !collectCompleted.includes(item.id) ? console.log('not completed') : item.completed = !false;
        })
      )
    })
  }
  
  
  render() {
    return (
      <div>
        <h2>The ToDo App</h2>     
        
        <div className="form">
          <form id="task-management" onSubmit={this.toDoListSubmit}>
            <label>ToDo Item:</label>
            <input type="text" name="task" value={this.state.task} onChange={this.toDoListHandler}/>
            <input type="submit" name="submit" value="Add ToDo"/>
            <input type="button" name="clear" value="Clear Completed" onClick={this.clearCompleted}/>            
          </form>
          <h3>ToDo Items:</h3>
          <div className="list"><ul>{this.state.toDoList.map(function(task){
          return ( task.completed === !true ?       
          <div className="item"><li><p>{task.task}</p><div className="completed"><label><input type="checkbox" onClick={() =>collectCompleted.push(task.id)}name="comp-button" value={`${task.id}`}/>Completed</label></div></li></div> : null)
        })}</ul></div>
        </div>
      </div>
    );
  }
  
}

export default App;
