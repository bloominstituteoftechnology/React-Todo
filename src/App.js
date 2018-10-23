import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      taskText: ''
    }
  }

  addTodo = event => {
    // prevent the default action of a button
    event.preventDefault();

    // set the tasks array by inserting the previous array items
    // then essentially appending the new task that was entered 
    this.setState({
      tasks: [
        ...this.state.tasks,
        {task: this.state.taskText, id: new Date().getTime(), completed: false}
      ],
      taskText: " "
    }, () => { console.log(this.state.tasks)});
    // TODO - Remove that call back to log the tasks, this was purely to check to see if it was getting added correctly.
  }

  markTodoComplete = index => {
    console.log("test");
    this.setState({
      tasks: this.state.tasks.map((task, idx) => {
        if (index !== idx) {
          return task;
        } else {
          return {
            ...task,
            completed: task.completed === true ? false : true
          }
        };
      })
    });
  }

  clearCompletedTodos = event => {
    // prevent the default action of a button
    event.preventDefault();
    console.log("clear completed todos.")
    this.setState({
      tasks: this.state.tasks.filter(task => {
        if (task.completed !== true) {
          return task;
        } else {
          return null;
        }
      })
    })
  }

  // This is tied to the input field and each keystroke of that field
  // will invoke this function and set state on the taskText with the
  // value of the field.
  changeHandler = event => {
    this.setState({ taskText: event.target.value }, () => {
      // TODO - At some point remove the console log here too, it's not needed anymore.
      console.log("This is an async call with a callback", 
      this.state.taskText
      );
    });
  }
  
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList tasks={this.state.tasks} markTodoComplete={this.markTodoComplete}/>
        <TodoForm taskText={this.state.taskText} addTodo={this.addTodo} changeHandler={this.changeHandler} clearCompletedTodos={this.clearCompletedTodos}/>
      </div>
    );
  }
}

export default App;
