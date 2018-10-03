import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props)

    this.state = {
      myTask: [
        { Todo: 'empty' },
      ],
      inputText: '',
      newTodo: ''
    };
  }

  changeHandler = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };


  addNewTodo = (event) => {
    event.preventDefault();
    this.setState({
      myTask: [
        ...this.state.myTask,
        { task: this.state.newTask }
      ],
      newTask: ''
    })
  }
  
  render() {

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoArr={this.state.myTask}/>
        <TodoForm
          addNewTodo={this.addNewTodo}
          changeHandler={this.changeHandler}
          todoData={this.state.myTask}
          inputText={this.state.inputText}
          newTask={this.state.newTask}
        />
      </div>
    );
  }
}



export default App;
