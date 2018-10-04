import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputText: ''
    };
  }


  changeText = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  addNewTodo = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        tasks: [
          ...this.state.tasks,
          {
            task: this.state.inputText,
            id: Date.now(),
            completed: false
          }
        ], inputText: ''
      });
    }
  };

  completedHandler = id => {
    console.log(this);
    this.setState({
      tasks: this.state.tasks.map((task) => {

        if (task.id !== id) {
          return task;
        } else {
          return {
            ...task,
            completed: task.completed === true ? false : true
          };
        } // else
      }) // .map
    }) // this.state
  } // handler


  clearCompletedHandler = () => {
    console.log('clear completed');
    let filterCompleted = function(task) {
      if (task.completed === true) {
        return null;
      } else {
        return task;
      }
    }
    this.setState({
      tasks: this.state.tasks.filter(filterCompleted) // filter
    }) // setState
  } // clearCompletedHandler


  render() {
    return (
      <div>
        <h1>Things To Do</h1>
        <TodoForm
          addNewTodo={this.addNewTodo}
          clearCompletedHandler={this.clearCompletedHandler}
          changeText={this.changeText}
          inputText={this.state.inputText}
          tasks={this.tasks}
        />
        <TodoList tasks={this.state.tasks} completedHandler={this.completedHandler} />
      </div>
    );
  }
}

export default App;
