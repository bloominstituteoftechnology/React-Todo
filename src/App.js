import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';
import TodoSearch from './components/TodoComponents/TodoSearch';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      "List title": "Todo List: MVP",
      "items": JSON.parse(localStorage.getItem('storedItems')),
      item: '',
      search:'',
      searchResults: []
    };
  }

addTask = event => {
  event.preventDefault();
  const items = this.state.items.slice();
  items.push({
    task: this.state.item,
    id: Date.now(),
    completed: false
  });

  let stringItems = JSON.stringify(items);
  localStorage.setItem('storedItems', stringItems);
  this.setState({items, item: ''});
}

changeTask = event => {
  console.log(event.target.value);
  this.setState({[event.target.name]: event.target.value});
}
//changeSearch = event => this.setState({[event.target.name]: event.target.value});

toggleCompleteHandler = id => {
  //do I need event.preventDefault()?
  let items = this.state.items.slice();
  items.map(item => {
    if (item.id === id) {
      item.completed = !item.completed;
      return item;
    } else {
      return item;
    }
  });
  this.setState({items: items});
}

clearCompleted = event => {
  event.preventDefault();
  let items = this.state.items.slice();
  items = items.filter(item => !item.completed);
  let stringItems = JSON.stringify(items);
  localStorage.setItem('storedItems', stringItems);
  this.setState({items});
}

searchTasks = event => {
  event.preventDefault();
  let searchResults = this.state.items.slice();
  searchResults = searchResults.filter(query => query.task === event.target.value);
  console.log('something');
  this.setState({searchResults: searchResults});

}

  render() {
    return ( <div className="main-content">
      <h1> {this.state["List title"]}</h1>
      <TodoSearch value={this.state.search} serachTaskHandler={this.searchTasks} searchChangeHandler={this.changeTask} />
      <TodoList listItems = {this.state.items} toggleComplete={this.toggleCompleteHandler} searchString={this.state.search} />
      <TodoForm value = {this.state.item} addTaskHandler = {this.addTask} taskChangeHandler = {this.changeTask} clearCompletedHandler = {this.clearCompleted} />
      </div>
    );
  }
}

export default App;
