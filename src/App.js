import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos:[
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
      newTodo: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { task: this.state.newTodo, completed: false, id: Date.now()}
      ],
      newTodo: ""
    });
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />

        <TodoForm
          addTodo={this.addTodo}
          changeHandler={this.changeHandler}
          newTodo={this.state.newTodo}
        />

      </div>
    );
  }
}

export default App;
