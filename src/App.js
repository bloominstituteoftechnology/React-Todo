import React, { useState } from 'react';
// import components
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

// --------------------------- Initial States ---------------------------
const todos = [
    {
      name: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      name: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
]


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      searchTerm: "",
      filteredTodos: todos
    }
  }

  // ---------------------------- Helper Functions ------------------------
addTodo = (todoName, e) => {
  e.preventDefault();
  const newTodo = {
    id: Date.now(), // simple way to create a UID
    name: todoName,
    completed: false
  }

  const todos =  [...this.state.todos, newTodo]; // ADDITION
  
  // add new todo to todos array
  this.setState({
    ...this.state,
    todos: todos
  })

  const filteredTodos = todos.filter(todo => todo.name.includes(this.state.searchTerm)) // ADDITION

  this.setState({
    ...this.state,
    filteredTodos: filteredTodos
  })
} // adds a new todo to the todos array

toggleCompleted = (todoId) => {
  console.log("toggling", todoId);
  // iterate through the todos array (this.state.todos) to toggle only the todo in question
  const newTodos = this.state.todos.map(todo => {
    if (todoId === todo.id) { 
      return {
        ...todo,
        completed: !todo.completed
      }
    }
    else { return todo; }
  })
  // update "todos" state value to this new array
  this.setState({
    ...this.state,
    todos: newTodos
  })
} // toggles todo to completed


clearCompleted = () => {
  console.log('clearing completed todos');
  // if the todo.completed is true, then filter it out of the this.state.todos array
  this.setState({
    ... this.state,
    todos: this.state.todos.filter(todo => !todo.completed)
  })
}


searchTodos = (searchTerm) => {
  console.log("searchTodos: ", searchTerm);
  // this.setState({
  //   ...this.state,
  //   searchTerm: searchTerm
  // });
  if (searchTerm === "") {
    this.setState({
      ...this.state,
      filteredTodos: todos
  })
}

  const filteredTodos = todos.filter( todo => {
    // console.log("boolean: ", (searchTerm.trim() === post.username) || 
    // (searchTerm.toLowerCase() === post.username) || 
    // (searchTerm === post.username))

    const todoName = todo.name.toLowerCase();
    const searchText = searchTerm.toLowerCase().trim();

   // setPosts(filteredPosts); // cannot redefine posts within the filter, because you need it to filter the entire posts array
    return (todoName.includes(searchText));

  }); // end of filter

console.log("searchTodos func is running. This is the searchTerm: ", searchTerm)
console.log("filtered: ", filteredTodos)

this.setState({
  ...this.state,
  filteredTodos: filteredTodos

  // this.setState({ todo: '' }); // zero out
})

} // passes searchTerm, filters through posts array, creates filteredPosts array

// const getFilteredPosts = (searchTerm) => {
//   // filter function over posts array, return filtered array
//     const filteredPosts = posts.filter( post => {
//       // console.log("boolean: ", (searchTerm.trim() === post.username) || 
//       // (searchTerm.toLowerCase() === post.username) || 
//       // (searchTerm === post.username))

//       const username = post.username.toLowerCase();
//       const searchText = searchTerm.toLowerCase().trim();
//      // setPosts(filteredPosts); // cannot redefine posts within the filter, because you need it to filter the entire posts array
//       return (username.includes(searchText));

//     }); // end of filter

//   console.log("getFilteredPosts func is running")
//   console.log("filtered: ", filteredPosts)

//   setPosts(filteredPosts);

// }  // passes searchTerm, filters through posts array, creates filteredPosts array

// ----------------------------- Event Handlers -------------------------
// handleClick = () => {
//   this.setState({
//     ...this.state,
//     todo: "todo one"}) // this copies the object, so it isn't mutated
// }
// ------------------------------- Side Effects -------------------------

  render() {
    return (
      <div className="App">

        <h2>Welcome to your Todo App!</h2>

        <TodoSearch todos={this.state.todos} searchTerm={this.state.searchTerm} searchTodos={this.searchTodos} filteredTodos={this.state.filteredTodos}/>

        <TodoList toggleCompleted={this.toggleCompleted} filteredTodos={this.state.filteredTodos} todos={this.state.todos} searchTerm={this.state.searchTerm}/>

        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
   
      </div>
    );
  }
}

export default App;
