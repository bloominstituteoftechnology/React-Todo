import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      taskList: [],
      inputText: '',
      completed: false
    };
  }

  //generates random id for task
  randomIdGenerator = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({[event.target.name] : event.target.value});
  }

  ///adds form input to  taskList array
  addTodo = event => {
    event.preventDefault();
    this.setState({
      taskList: [
        ...this.state.taskList,
        {id: this.randomIdGenerator(), task: this.state.inputText, completed: this.state.completed}
      ],
      inputText: ''
    });
  }

  //adds form input to task list array
  pressEnter = event => {
    if(event.key === 'Enter'){
      this.setState({
        taskList: [
          ...this.state.taskList,
          {id: this.randomIdGenerator(), task: this.state.inputText, completed: this.state.completed}
        ],
        inputText: ''
      }); 
    }
  }

  ///adds true to completed task on click.
  completeTask = () => {
    this.setState(prevState => {
      console.log(prevState.completed)
      return {completed: !prevState.completed}

    })
    console.log(this.state.completed)
  }
  
  render() {
    return (
      <div className="main-container">
        <TodoForm 
          formInput={this.state.formInput} 
          inputText={this.state.inputText} 
          changeHandler={this.changeHandler} 
          addTodo={this.addTodo} 
          pressEnter={this.pressEnter}
        />
        <TodoList 
          todoList={this.state.taskList} 
          inputText={this.state.inputText}
          completedTask = {this.completeTask}
          completed={this.state.completed}
        />
      </div>
    );
  }
}

export default App;
