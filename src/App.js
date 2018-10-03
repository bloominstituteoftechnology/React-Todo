import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
// import TodoList from './components/TodoComponents/TodoList';
// import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoData: [
        {
          task: 'sdf',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'dsfs',
          id: 1528817084358,
          completed: false
        }
      ],
      inputText: '',
      newTodo: '',
    }
  }

  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      TodoData: [
        ...this.state.TodoData,
        { task: this.state.newTodo }
      ],
      newTodo: ''
    });
  };

  changeHandler = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        {/* <TodoList 
          todoData={this.state.TodoData}
        /> */}
        {/* <Todo /> */}
        <TodoForm 
          addNewTodo={this.addNewTodo}
          changeHandler={this.changeHandler}
          inputText={this.state.inputText}
          todoData={this.state.TodoData}
          newTodo={this.state.newTodo}
        />
      </div>
    );
  }
}

export default App;
