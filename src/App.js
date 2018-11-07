import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

let todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  },
  {
    task: 'Eat salad',
    id: 1528817084558,
    completed: false
  },
  {
    task: 'Throw up (a little)',
    id: 1528817484358,
    completed: true
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todoData,
      inputText: ''
    };
  }
  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodo = ev => {
    ev.preventDefault();
    // create a new array with:
    // 1 - all the old data in the old array (Hint: use the spread operator)
    // 2 - the new character from this.state.inputText
    this.setState({
      todos: [
        ...this.state.todos,
        { task: this.state.inputText, 
          id: Date.now(), 
          completed: false }
      ],
      inputText: ''
    });
  };

  removeTodo = ev => {
    ev.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos.filter(item =>
          item.completed === false
        )       
      ],
      inputText: ''
    });
  };

  toggleCompleted = event => {
    event.preventDefault();

    let currentID = event.target.attributes[0].value;
    
    let taskToChange = this.state.todos.findIndex(item => {
      return item.id.toString() === currentID;
    })

    let newTodosList = this.state.todos;

    if (newTodosList[taskToChange].completed){
      newTodosList[taskToChange].completed = false;
    } else {
      newTodosList[taskToChange].completed = true;
    }

    this.setState({
      todos: newTodosList
    });
  };

  render() {
    return (
      <div className='container'>
        <TodoForm 
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          removeTodo={this.removeTodo}
          className="todo-form"
        />
        <TodoList 
          handleClick={this.handleClick}
          toggleCompleted={this.toggleCompleted}
          todos={this.state.todos} 
          className="todo-list"
        />
      </div>
    );
  }
}

export default App;
