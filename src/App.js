import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      "List title": "Todo List: MVP",
      "items": [{
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      item: ''
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
  this.setState({items, item: ''});
}

changeTask = event => this.setState({[event.target.name]: event.target.value});

toggleCompleteHandler = id => {
  //do I need event.preventDefault()?
  let items = this.state.items.slice();
  console.log('something happended');
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
  this.setState({items});
}

  render() {
    return ( <div>
      <h1> {this.state["List title"]}</h1>
      <TodoList listItems = {this.state.items} toggleComplete={this.toggleCompleteHandler} />
      <TodoForm value = {this.state.item} addTaskHandler = {this.addTask} taskChangeHandler = {this.changeTask} clearCompletedHandler = {this.clearCompleted} />
      </div>
    );
  }
}

export default App;
