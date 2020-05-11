import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const data = [
  {
    task: 'Make todo list',
    id: 1234,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: data,
      lastTodo: data,
      searchText: ''
    }
  }

  addItem = task => {
    this.setState({
      todo: [
        ...this.state.todo, 
        {
          task: task,
          id: Date.now(),
          completed: false
        }
      ]
    })
    this.setState({
      lastTodo: [
        ...this.state.todo, 
        {
          task: task,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(item => {
        return !item.completed
      })
    })
    this.setState({
      lastTodo: this.state.todo.filter(item => {
        return !item.completed
      })
    })
  }

  toggleCompleted = (itemID) => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === itemID) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  
  handleChanges = e => {
    this.setState({
        searchText: e.target.value
    });       
}

  handleSearchSubmit = e => {
    e.preventDefault();
    if (this.state.searchText !== '') {
      this.setState({
        todo: this.state.todo.filter(item => {
          return item.task.includes(this.state.searchText)
        })
      })
      this.setState({searchText: ''});
    }
  }

  handleRestoreSubmit = e => {
    e.preventDefault();
    this.setState({ todo: this.state.lastTodo})
  }

  render() {
    console.log('rendering...')
    return (
      <div className='App'>
        <div className='search'>
          <form onSubmit={this.handleSearchSubmit}>
              <input
                onChange={this.handleChanges}
                type='text'
                name='search'
                value={this.state.searchText}
                className='field'
                placeholder='Search'
              />
              <button className='field'>Search List</button>              
          </form>
        </div>

        <h1 className='title'>Welcome to your Todo App!</h1>        

        <TodoForm addItem={this.addItem}/> 

        <TodoList
        todo={this.state.todo}
        toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted}
        />   

        <button className='clearButton' onClick={this.clearCompleted}>
          Clear Completed Task
        </button>    

        <button className='clearButton' onClick={this.handleRestoreSubmit}>
          Restore List
        </button>
      </div>
    );
  }
}

export default App;