import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todoList = [
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
  // you will need a place to store your state in this component.
  constructor(){
    super()
    this.state = {
      todoList
    }
  }
  toggleItem = itemId => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if(itemId === item.id) {
          return {
            ...item, 
            completed: !item.completed
          };
        }
        return item;
      })
    })
  }
  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(item => !item.completed)
    })
  }
  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({todoList : [...this.state.todoList, newItem]})
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm 
          handleChange={this.handleChange} 
          addItem={this.addItem} />
        <TodoList 
          todoList={this.state.todoList}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
