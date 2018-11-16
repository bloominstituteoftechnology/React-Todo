import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './index.css';

// const ToDoTasks = [
//   {
//     task: 'Watch Arrrested Development',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Fry Cornball Snacks',
//     id: 1528817084358,
//     completed: false
//   },
//   {
//     task: 'Bandage Resulting Burns',
//     id: 1528817084358,
//     completed: false
//   }
// ];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Watch Arrrested Development',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Fry Cornball Snacks',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Bandage Resulting Burns',
          id: 1528817077289,
          completed: false
        }
      ],
      todo: ''
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //User adds new tasks into field
  addTodo = apple => {
    apple.preventDefault();
    const todos = this.state.todos.slice();
    //points at const todos(an array) inside this.state of class App (above)
    //since slice() is empty, it begins at index 0 and ends the length of the array
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    //pushing new contents into the shallow copy created by this.state.todos.slice();
    this.setState({ todos, todo: '' });
  };

  changeTodo = banana=> this.setState({ [banana.target.name]: banana.target.value });



  //This method adds the mark through items that the user clicks
  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    //notice the use of let
    //notice that todos is also the name of the array in this.state in App
    //since slice() is empty, it begins at index 0 and ends the length of the array
    todos = todos.map(todo => {
      //no let or const
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
    //evaluating const todos
  };

  clearCompletedTodos = element => {
    element.preventDefault();
    let todos = this.state.todos.slice();
    //notice the use of let
    //notice that todos is also the name of the array in this.state in App
    //since slice() is empty, it begins at index 0 and ends the length of the array
    todos = todos.filter(todo => !todo.completed);
    //no let or const
    //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    this.setState({ todos });
  };




//For reference on render() below--------
 
//   const TodoList = props => {
//     return (
//         <div>
//           {props.todos.map(todo => (
//             <Todo handleToggleComplete={props.handleToggleComplete}
//               key={todo.id}
//               todo={todo}
//             />
//           ))}
//         </div>
//       );
// }

//const TodoForm = props => {
//   return (
//     <form>
//         <input
//             //basic structure of handlers is onChange = {props.handleCapitalVars}
//             onChange = {props.handleTodoChange}
//             type="text"
//             name="todo"
//             value={props.value}
//             placeholder="...Add a task!" 
//         />
//         <button onClick = {props.handleAddTodo}>Add ToDo</button>
//         <button onClick = {props.handleClearTodos}>Clear</button>
//     </form>
// )
// }

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
