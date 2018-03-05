import React,{Component} from 'react';

class App extends Component{
  constructor() {
    super();
    this.state = {
      todo: ['Do laundry', 'buy groceries'], 
      newTask : '',
    };
  }

  addNewTask = (event) => {
    event.preventDefault();
    const newTaskList = this.state.todo; 
    newTaskList.push(this.state.newTask);
    this.setState({
      todo: newTaskList,
      newTaskList: '',
      });
  };

  handleTodoTaskInput = (event) => {
    this.setState({newTask: event.target.value});
  };

  render(){
    return(
      <div> 
        <div> <h2>Todo App</h2></div>
        {this.state.todo.map((todo,index) => <div key={index}>{todo}</div>)}
        <form onSubmit = {this.addNewTask}>
          <input type = "text" onChange={this.handleTodoTaskInput} placeholder="Add a new Task" value={this.state.addNewTask}/>
        </form>
      
      </div>
    );}
}

export default App;
