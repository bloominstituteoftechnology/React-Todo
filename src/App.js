import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          task:'Organise Garage',
          id: Date.now(),
          completed: false
        },
      ],
      newTodo: "",
    };
  }
  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { task: this.state.newTodo,
        id: Date.now(),
        completed: false
        }
      ],
      newTodo: ""
    });
  }

  textInputHandler = event => this.setState({ [event.target.name]: event.target.value });
  
  render() {
    return (
      <div>
       <TodoList
       todos={this.state.todos}/>

       <TodoForm
       todos={this.state.todos}
       addNewTodo={this.addNewTodo}
       newTodo={this.state.newTodo}
       textInputHandler={this.textInputHandler}
       />
      </div>
    );
  }
}

export default App;
