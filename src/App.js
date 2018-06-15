import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from './components/TodoComponents/TodoForm';
class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      greeting: "Hey",
      list: [
        "first",
        "second"
      ],
      list2: "",
      todos: [
        {
        task: "Organize Garage",
        id: 1528817077286,
        completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }

      ],
      todo: ""

    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and 
  //any change handlers you need to work with your state
changeGreetingHandler = event => {
  console.log(event.target.value);
  this.setState({list2: event.target.value});
};
addList = () => {
  const list = this.state.list.slice();
  list.push(this.state.list2)
  this.setState({list: list, list2: ""})
}
addTodo = element => {
  element.preventDefault();
  const todos = this.state.todos.slice();
  todos.push({ task: this.state.todo, completed: false, id: Date.now() });
  this.setState({todos, todo: ""});
};
changeTodo = event => this.setState({ [event.target.name]: event.target.value});

  render() {
    return (
      <div>
        <h2>{this.state.greeting}</h2>
        <input
        type="text"
        onChange={this.changeGreetingHandler}
        placeholder="...todo"
        value={this.state.list2}
        />
        <button onClick={this.addList}>Add List</button>
        <TodoList coolList={this.state.list}
        todos={this.state.todos}
        />
        <TodoForm 
        value={this.state.todo}
        handleTodoChange={this.changeTodo}
        handleAddTodo={this.addTodo}
        />
        
      </div>
    );
  }
}

export default App;
