import React  from 'react';
import './App.css';
import Header from './components/header.js';
import ToDoInput from './components/TodoInput.js';
import TodoItem from './components/TodoItem.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 0, text:"Gym"},
        {id: 1, text:"Tan"},
        {id: 2, text:"Laundry"},
      ],
      nextId: 3
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(todoText) {
      let todos = this.state.todos.slice();
      todos.push({id: this.state.nextId, text: todoText});
      this.setState({
        todos: todos,
      })
    }
      removeTodo(id) {
        this.setState({
          todos: this.state.todos.filter((todo, index) => todo.id !== id)
        })
      
    }

  render () {
    return (
      <div className="App">
      <div className="todo-wrapper">
      <Header />
      <ToDoInput TodoText="" addTodo={this.addTodo}/>
      <ul>
        {
          this.state.todos.map((Todo) => {
            return <TodoItem Todo={Todo} key={Todo.id} id={Todo.id} removeTodo={this.removeTodo}/>
          })
        }
        </ul>
      </div>
      </div>
    );
  }
}

export default App;