import React from 'react';

import TodoForm from "./components/TodoComponents/TodoForm"

import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        {listItem: ''}
      ],
      inputText: '',
      newListItem: '',
      completed: 'todo'
    }
  }
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  addNewListItem = event => {
    event.preventDefault();
    this.setState({
      listData: [
      ...this.state.listData,
        { listItem: this.state.newListItem }
      ],
      newListItem: '',
    })
  }
  
  crossOut = index => {
    this.setState({
      listData : this.state.listData.map((item, idx) => {
        if (index !== idx) {
          return item;
        } else {
          return {
            ...item,
            completed: item.completed === 'todo' ? 'done' : 'todo'
          }
        }
      }
      )
    })
  }

  clearCompleted = index => {
    this.setState({
      listData : this.state.listData.filter((item, idx) => {
        if (index !== idx) {
          return item;
        } else {
          return {
            ...item,
            item: item.completed === 'todo';
          }
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h1>To Do List: MVP</h1>
        <TodoForm 
        listData={this.state.listData}
        inputText={this.state.inputText}
        newListItem={this.state.newListItem}
        changeHandler={this.changeHandler}
        addNewListItem={this.addNewListItem}
        crossOut={this.crossOut}
        completed={this.completed}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
