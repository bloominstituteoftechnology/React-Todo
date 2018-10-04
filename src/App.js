import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props)
    this.state = {
      todoData: [
        // {
        //   task: 'Organize Garage',
        //   id: 1528817077286,
        //   completed: false,
        // },
        // {
        //   task: 'Bake Cookies',
        //   id: 1528817084358,
        //   completed: false,
        // }
      ],
      newTodo: '',
    }
  }

  changeCompleted = index => {
    this.setState({
      todoData: this.state.todoData.map((task, idx) => {
        if (index !== idx) {
          return task;
        } else {
          return {
            ...task,
            completed: task.completed === false ? true : false
          };
        }
      })
    });
  };

  changeHandler = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todoData: [
        ...this.state.todoData,
        { task: this.state.newTodo,
          id: Date.now(),
          completed: false,
          line: false
        }
      ],
      newTodo: ''
    });
  };

  filterTask = (event) => {
    event.preventDefault();
    this.setState({
      todoData: this.state.todoData.filter((task, idx) => {
        if (task !== idx) {
          return !task.completed;
        } else {
          return null;
        }
      })
    });
  };

  render() {
    return (
      <div className='container'>
        <h1>Todo List:</h1>
        <TodoList 
          todoData={this.state.todoData}
          changeCompleted={this.changeCompleted}
          />
        <TodoForm
          changeHandler={this.changeHandler}
          addTodo={this.addTodo}
          newTodo={this.state.newTodo}
          completed={this.state.completed}
          filterTask={this.filterTask}
          />
      </div>
    );
  }
}

export default App;
