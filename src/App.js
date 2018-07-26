import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
//todos=empty array.
//todo=new items that will be added. 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [ ],
      todo: ''
    };
  }
//this function is creating new items on the list, and is also pushing the 
//new items onto the list. this.setState({todos, todo: ''})
// is allowing the two states to change. 

  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({
       task: this.state.todo,
       completed: false, 
       id: Date.now() 
      });
    this.setState({ todos, todo: '' });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

//this function is allowing the user to choose whether the task kis complete or not.
//todos.map(todo =>... is mapping through the list and is allowing there to be change on each
// of the items on the list. then saying that the item can either be false or true. 
//todo.complete=false !todo.complete=true. mainly using the id to choose this. 
  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };
//this is for day 2, it clears the todo tasks
//what this function is doing is taking !todo.complete and putting it in this function
//to allow the user to clear the task off of the list. 
//todos.filter, will filter through the list trying to find the items on the 
//list that are now !todo.complete=true. 
//this makes it possible to get rid of the task on the list. 
  clearCompletedTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}


export default App;