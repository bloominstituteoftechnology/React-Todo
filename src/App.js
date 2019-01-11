import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


const todoData   = [
  {
    task: '',
    id: Date.now(),
    completed: false,
    textDecoration: "none"
  },
  {
    task: '',
    id: Date.now(),
    completed: false,
    textDecoration: "none"
  }
];

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      tasks: todoData,
      inputText: ''
    };
  }

  clearButton = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => task.completed === false)
    });
  };

  lineThrough = id => {
    console.log("function invoked!");
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: task.completed === false ? true : false
          };
        } else {
          return task;
        }
      })
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTask = e => {
    e.preventDefault();
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.inputText, completed: false, id: Date.now() }
      ],
      inputText: ""
    });
  };

=======
      todos, // same as todos: todos,
      newTodoText: ''
    };
  }

  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: this.state.newTodoText,
          id: Date.now(),
          completed: false
        }
      ],
      newTodoText: ''
    });
  };
>>>>>>> 466f99b10404af68e500587d92f0bf0e03f39a25

  render() {
    return (
      <div className='main-container'>
<<<<<<< HEAD
      <h2>Welcome to your Todo App!</h2>
       <TodoList tasks={this.state.tasks} lineThrough={this.lineThrough} />
        <TodoForm
          clearButton={this.clearButton}
          addTask={this.addTask}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
=======
        <h2>Welcome to your Todo App!</h2>
        <TodoList
        todos={this.state.todos}
        />
  <TodoForm
          addTodo={this.addTodo}
          handleChanges={this.handleChanges}
          newTodoText={this.state.newTodoText}
>>>>>>> 466f99b10404af68e500587d92f0bf0e03f39a25
        />
      </div>
    );
  }
}

export default App;