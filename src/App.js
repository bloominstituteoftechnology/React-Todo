
import React from 'react';
import './components/Todo.css';
//importing components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

//hardcoded data
const todo = [
  {
    task: 'Organize Garage',
    id: Math.floor(Math.random() * Date.now()),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: Math.floor(Math.random() * Date.now()),
    completed: false
  }, 
  {
    task: 'Fold Laundry',
    id: Math.floor(Math.random() * Date.now()),
    completed: false
  }
];

//class component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo
    }
  }

  handleItemToggle = (itemId) => {
    this.setState({
      todo: this.state.todo.map((item)=> {
        if(item.id === itemId){
          return{
            ...item, completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  handleItemCompleted = () => {
    const newTodo = this.state.todo.filter((item)=> {
      return(!item.completed)
    })
    this.setState({
      todo: newTodo
    })
  }

  handleAddItem = (todoItem) => {
    const item = {
      task: todoItem,
      id: this.state.todo.length,
      complete: false,
    }
    const newTodo = [...this.state.todo, item];
    this.setState({
      todo: newTodo
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div>
            <h2>These are the items on my Todo List</h2>
            <TodoForm handleAddItem={this.handleAddItem}/>
            <TodoList handleItemCompleted={this.handleItemCompleted} todo={this.state.todo} handleItemToggle={this.handleItemToggle}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;