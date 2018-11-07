import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

let todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
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

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm 
          addTodo={this.addTodo}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
