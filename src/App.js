import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

const seedTodos = [
  {
    title: '🏃‍♂️ 2 miles',
    id: 1234,
    completed: false,
    category: 'Health and Wellness',
  },
  {
    title: 'Play Untitled Goose Game',
    id: 1235,
    completed: false,
    category: 'Entertainment',
  },
  {
    title: `Prep this week's meals`,
    id: 1236,
    completed: false,
    category: 'Health and Wellness',
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: seedTodos,
    };
  }

  // need a method to add a todo item
  addTodo = todo => {
    const newTodo = {
      title: todo,
      id: Date.now(),
      completed: false,
      category: 'uncategorized',
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  // method to complete a todo item
  completeTodo = id => {
    console.log('complete todo, ', id);
    // update state by finding the todo with that id and marking it as "complete"
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else return todo;
      }),
    });
  };
  // method to clear completed todo items
  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false),
    });
  };
  // stretch
  // method to place todo items in specific buckets according to the item's category

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          completeTodo={this.completeTodo}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
