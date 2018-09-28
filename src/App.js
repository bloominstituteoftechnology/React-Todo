import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listItems: JSON.parse(localStorage.getItem('todoList')),
      itemToAdd: '',
    };
  }

  updateListInStorage = () => {
    localStorage.setItem('todoList', JSON.stringify(this.state.listItems));
  }

  addItem = (event) => {
    if (this.state.itemToAdd !== '') {
      // Thanks to Michael Littleton for the concat() idea!
      this.setState({
        listItems: this.state.listItems.concat({
          task: this.state.itemToAdd,
          id: Date.now(),
          completed: false
        })
      }, this.updateListInStorage)
    }
    this.state.itemToAdd = '';
  }

  markComplete = (taskID) => {
    this.setState({
      listItems: this.state.listItems.map(item => {
        
        if (item.id.toString() === taskID) {
          return {
            task: item.task,
            id: item.id,
            completed: !item.completed,
          }
        }
        else { 
          this.updateListInStorage();
          return item;
        }
        } )
      }, this.updateListInStorage);
    }
  
  clearCompleted = () => {
    this.state.listItems = this.state.listItems.filter(item => item.completed === false);
    this.setState({
      listItems: this.state.listItems,
    }, this.updateListInStorage)
    
  }

  textChanged = (event) => {
    this.setState({
      itemToAdd: event.target.value}
      );
  }

  render() {
    return (
      <div className="list-container">
        <h1 className='list-title'>List-O-Matic</h1>
        <div className='list-hrule'></div>
        <TodoForm textValue={this.state.itemToAdd} textChanged={this.textChanged} addItem={this.addItem} clearCompleted={this.clearCompleted} />
        <TodoList completedFunc={this.markComplete} listItem={this.state.listItems} />
      </div>
    );
    
  }
}

export default App;
