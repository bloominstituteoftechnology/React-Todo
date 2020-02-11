import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from './components/TodoComponents/TodoForm'
import "./index.css"

const list = [
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
  constructor(){
    super()
    this.state = {
      todoList: list
    };
  }

  toggleItem = clickedId => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === clickedId){
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item
      }
    });
    this.setState({
      todoList: newTodoList
    })
  }

  addNewItem = (itemText) => {
    const newItem = {
      task: itemText,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
  }

  removeTodo = () => {
    const newToDo = this.state.todoList.filter( item => 
      item.completed < 1
    )
    this.setState({
      todoList: newToDo
    })
  }
 
  render() {
    return (
      <div className='App'> 
      <div className="header">
        <h1>To do list</h1>
        <TodoForm addNewItem={this.addNewItem} />
        </div>

        <TodoList todoList={this.state.todoList} toggleItem={this.toggleItem} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
