import React, {Component} from 'react';

import TodoList from './components/TodoList';

//CCR (Class, Constructor, Render)

class App extends Component{
  constructor() {
    super();
    this.state = {
      newTodo: '',
    todos: ['this is a test']
    };
  }

  itemHandler = event => {
    this.setState({[event.target.name]: event.target.value });
  };

handSubmitItem = () => {
  const {todos} = this.state;
  const myTodo = { text: this.state.newTodo};
  todos.push(myTodo);
  this.setState({todos, newTodo: ''});
};
  render() {
    return (
    <div>
      <input type='text' placeholder= 'add item' name ="newTodo" value ={this.state.newTodo} onChange={this.itemHandler}/>
      <button onClick= {this.handSubmitItem}> Add item </button>
      <TodoList todos={this.state.todos}/>
    </div>
    );
  }
};

export default App;
