import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
        tasks
      };
    }
  
  toggleItem = (todoId) => {
    console.log(todoId, "Toggling Todo");
    this.setState({
      tasks: this.state.tasks.map((todo) => {
        if(todoId === todo.id) {
          return {
            ...todo, 
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  }

  addTodo = (todoName) => {
    const newTodo = {
      name: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTodo]
    });
  };

  clearTodo = e => {
    e.preventDefault();
    this.setState({
      ...this.state, 
      tasks: this.state.tasks.filter(todo => !todo.completed)
    })
  }
  render() {
    return (
      <div className="App">
        <div className="header">
        <h1>Todo List: MVP</h1>
        <TodoForm
          addTodo={this.addTodo}
         />
        </div>
        <TodoList
         tasks={this.state.tasks}
         toggleItem={this.toggleItem}
         clearTodo={this.clearTodo}
         />
        
      </div>
    );
  }
}

export default App;
