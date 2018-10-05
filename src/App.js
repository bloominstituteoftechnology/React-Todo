import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
        item: '',
        todos:[
          {
            task: 'test',
            id: Date.now(),
            completed: false
          }
        ], 
    };
  }

  //input handlers
  onChange = (event) => {
    this.setState({
     [event.target.name]: event.target.value});
  }

  //toggle 
  toggleCompleted = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(item => {
      if(item.id === id) {
        item.completed = !item.completed;
      return item;
      } else {
        return item;
      }
    });
    this.setState({
      todos:todos
    });
  }

 

//add handler
  onSubmit = (event) => {
    event.preventDefault();
    const todos = this.state.todos.slice()
    todos.push(
      {task:this.state.item, completed: false, id: Date.now()});
      this.setState(
        {todos: todos, item: ''});
  }  
  
  // deleteItem = (item) => { //NOT WORKING
  //   this.setState(({todos}) => ({
  //     todos: todos.filter((task, index) => index !== item)
  //   }));
  // }

  render() {
    return (
      <div>
        <TodoList 
        todos={this.state.todos}
        toggleCompleted={this.toggleCompleted}
        // deleteItem={this.deleteItem}
        />
        <TodoForm
          value={this.state.item}
          onChange={this.onChange}
          onSubmit={this.onSubmit} 
          item={this.state.item}
        />
      </div>
    );
  }
}

export default App;
