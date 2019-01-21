import React from 'react';
import './App.css';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const toDoData = [
  { task: 'Drink 16oz of water', id: 42, completed: false, textDecoration: "none" },
  { task: 'Read a book', id: 17, completed: false, textDecoration: "none" },
  { task: 'Study tomorrow\'s class materials', id: 86, completed: false, textDecoration: "none" }
];

class App extends React.Component {
  constructor() {
    super ();
    this.state = {
      todos: toDoData,
      todo: ''
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewItem = ev => {
    ev.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { task: this.state.todo, 
          id: Date.now(), 
          completed: false, 
          textDecoration: "none" }
      ],
      todo: ''
    });
    this.saveList();
  };

  saveList = ev => {
    const todo = this.state.todo
    localStorage.setItem('todo', todo);
  }


  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  }
 

  render() {
    console.log('Render is running!');
    return (
      <div className="body">
      <div className="App">
      <h1 className="toDoHeader">Things to Accomplish:</h1>
      <TodoList 
      toggleCompleted={this.toggleCompleted}
      todos={this.state.todos}
      />
      <TodoForm
        saveList={this.saveList}
        addNewItem={this.addNewItem}
        handleChanges={this.handleChanges}
        todo={this.state.todo}
         />
      </div>
      </div>
    );
  }
}

export default App;