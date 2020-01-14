import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const todos = [];
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todoList: todos,
        todoText: ''
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleItem = id => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
        ...item, 
        checked: !item.checked
      };
    } else {
      return item;
    }
    });
    this.setState({
      todoList: newTodoList,
     
    });
  };
  

  addItem = itemName =>{
    const newItem = {
      name: itemName,
      id: Date.now(),
      checked: false
    };
    this.setState({
      todoList:[...this.state.todoList, newItem]
    });
  };
  clearChecked = () => {
    this.setState({
    todoList: this.state.todoList.filter(item =>
    !item.checked)
    });
  };

  handleChanges = e => {
    this.setState({
        todoText: e.target.value
    });
};
handleSubmit = e =>{
    e.preventDefault();
    this.addItem(this.state.todoText);
};
  
  render() {
    console.log('rendering...');
    return (
      <div className="App">
      <div className="header">  
        <h1>Shopping List!</h1>
      </div>
      <div className="form">
        <TodoForm 
        addItem={this.addItem} 
        handleChanges={this.handleChanges}
        handleSubmit={this.handleSubmit}/>
        <TodoList
          todos={this.state.todoList}
          toggleItem={this.toggleItem}
          clearChecked={this.clearChecked}
        />
        
        </div>
      </div>
    );
  }
}

export default App;
