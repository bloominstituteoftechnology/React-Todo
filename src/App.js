import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
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
      ],
      inputText: '',
    }
  }

  changeHandler = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todo: [
        ...this.state.todo,
        {task: this.state.inputText,
        id: Date.now(),
        completed: false}
      ]
    })

  }

  render() {
    return (
      <div>
        <TodoList 
          todo={this.state.todo}
        />
        <TodoForm
          inputText={this.state.inputText}
          changeHandler={this.changeHandler}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
