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
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {task: this.state.newTodo}
      ],
      newTodo: ""
    });
  }
  render() {
    return (
      <div>
        <TodoForm 
          addTodo={this.addTodo}
          changeHandler={this.changeHandler}
          todos={this.state.todos}
          inputText={this.state.inputText}
          newTodo={this.state.newTodo}
        />
        
        <TodoList todos={this.state.todos} />

      </div>
    );
  }
}

export default App;
