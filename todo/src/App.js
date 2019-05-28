import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import Header from './components/Header';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    todo: '',
    complete: false,
    toDoList: []
    }
  }

  componentDidMount(){
    this.setState({toDoList: [{ todo: 'Laundry', complete: false, id: Date.now()}]});
  }

  handleChange = (event) => {
    this.setState({todo: event.target.value});
  }

  handleComplete =() => {
    const filtered = this.state.toDoList.filter(todo => {
      return todo.complete === false;
    })
    this.setState({toDoList: filtered});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.todo === "") {
      alert("must enter something in input field!");
      return;
    }
    const newToDo = {todo: this.state.todo, complete: false, id: Date.now()}
    this.setState({toDoList: [...this.state.toDoList, newToDo], 
      todo: '' });
  }


  handleToggle = (id) => {
    let todos = this.state.toDoList.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ toDoList: todos });
  }

  render(){
    return (
      <div className="container">
        <Header />
        <ToDoForm 
          todo={this.state.todo}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
        <ToDoList 
          handleToggle={this.handleToggle}
          complete={this.state.complete}
          toDoList = {this.state.toDoList}
          handleComplete={this.handleComplete}
        />
      </div>
      
    )
  }
}

export default App;
