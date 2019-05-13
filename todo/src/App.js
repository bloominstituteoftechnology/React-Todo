import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

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
    this.setState({toDoList: ['Laundry']});
    console.log(this.state)
  }

  handleChange = (event) => {
    this.setState({todo: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({todoList: this.state.toDoList.push(this.state.todo)});
    this.setState({todo: ''});
  }

  handleToggle = () => {
    this.setState({complete: !this.state.complete});
  }

  render(){
    return (
      <div>
        <ToDoForm 
          todo={this.state.todo}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
        <ToDoList 
          handleToggle={this.handleToggle}
          complete={this.state.complete}
          toDoList = {this.state.toDoList}
          todo={this.state.todo}
        />
      </div>
      
    )
  }
}

export default App;
