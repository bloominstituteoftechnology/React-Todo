import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
List = text => {
  if(text !== '') {
    const newItems = {
      task: text, 
      id: Date.now(),
      completed: false
    };

    this.setState(prevState => {
      let task = prevState.items.slice();
      task.push(newItems);

      return {
        todos: task
      }
      
    })
  }
};

toggleTodo = id => {
  let task = this.state.items.map(todo => {
 
    if(id === todo.id){
      todo.completed = !todo.completed
      return todo
    } else {
      return todo
    }
  })
  this.setState({
    todos: task
  })
}

clearHandler = event => {
  if(!this.state.items.completed) {
    let newItems = this.state.items.filter(props => {
      return props.completed !== true
    })
    this.setState({
      items: newItems
    })
  }
}

render() {
 return(
    <div>
      <h2>Welcome to your Todo App!</h2>
      <TodoList items = {this.state.items} toggleTodo = {this.toggleTodo} />
      <TodoForm List = {this.List} clearHandler = {this.clearHandler} />
    </div>
 );
}
}


export default App;