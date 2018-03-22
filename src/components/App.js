import React, { Component } from 'react';
import TodoList from './Todolist';
import Todo from './Todo';
// import App.css;

// const App = () => (
//   <div>
//     <h2>Todo App</h2>

//   </div>
// );

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {item: 'mow the lawn', status: false},
        {item: 'mow the lawn', status: false},
      ],
      input: ''
    };
  }

  onChange = (event) => {
    this.setState({todos: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todo: '',
      items: [...this.state.items, this.state.term]
    });
  }


  render() {
    return (
      <div>
        {/* {this.state.todos.map(item => <div>{item}</div>)} */}
          {<TodoList todos={this.state.todos} />}
      </div>
    )
  }
}

export default App;
