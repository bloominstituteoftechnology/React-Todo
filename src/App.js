import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ""
    };
  }

  onChange = event => {
    return this.setState({ todo: event.target.value });
  }

  todosAdd = event => {
    let todosCopy = this.state.todos.slice();
    if (this.state.todo === '') { return alert("Please enter something in field") };
    todosCopy.push({ task: this.state.todo, id: Math.random(), completed: false });
    return this.setState({ todos: todosCopy, todo: "" });
  }

  onClear = event => {
    let todosCopy = this.state.todos.slice();
    if (todosCopy.length === 0) {return alert("Nothing to clear")}
      for (let i = 0; i < todosCopy.length; ++i) {
        if (todosCopy[i].completed) {
          delete todosCopy[i];
        }
      }
    
    return this.setState({ todos: todosCopy, todo: "" });
  }

  completedEvent = id => {
    let todosCopy = this.state.todos.slice();
    // for(let i = 0; i < todosCopy.length; ++i){
    //   if(id === todosCopy[i].id){
    //     todosCopy[i].completed =  !(todosCopy[i].completed)
    //   }

    todosCopy = todosCopy.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      }
      else {
        return item;
      }
    })

    this.setState({ todos: todosCopy })
  }
  render() {
    console.log("RENDER CALLED!")
    console.table(this.state.todos)
    return (
      <div>
        <h2>Your Todo List</h2>
        <TodoForm
          passedChanged={this.onChange}
          passedValue={this.state.todo}
          onAddClick={this.todosAdd}
          onClearClick={this.onClear}
        />
        <TodoList passedTodos={this.state.todos} complete={this.completedEvent} />
      </div>
    );
  }
}

export default App;
