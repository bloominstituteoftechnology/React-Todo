import React from 'react';

const taskArray = [];

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
    taskArray.push(this.state.task);
    console.log(taskArray.length)   
    console.log(taskArray) 
  }
  upDateList = () => {
    return <h3>{taskArray.pop()}</h3>
  }
  
  
  render() {
    return (
      <div>
        <h2>The ToDo App</h2>
        <this.upDateList />
        <div className="form">
          <form onSubmit={this.toDoListSubmit}>
            <label>ToDo Item:</label>
            <input type="text" name="task" value={this.state.task} onChange={this.toDoListHandler}/>
            <input type="submit" name="submit" value="Add ToDo"/>
            <input type="button" name="clear" value="Clear Completed"/>
          </form>
        </div>
      </div>
    );
  }
  
}

export default App;
