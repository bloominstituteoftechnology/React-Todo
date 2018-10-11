import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  //stateful component

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();

    this.state = {
      taskList: [{id: 1, task: "this so a test", completed: false}],
      inputText: ''
    };
  }

    //generates random id for task
    randomIdGenerator = () => {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

  changeHandler = event => {
    event.preventDefault();
    this.setState({[event.target.name] : event.target.value});
  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      taskList: [
        ...this.state.taskList,
        {id: this.randomIdGenerator(), task: this.state.inputText, completed: false}
      ]
    })
  }
  
  render() {
    return (
      <div className="main-container">
        <TodoForm formInput={this.state.formInput} inputText={this.state.inputText} changeHandler={this.changeHandler} addTodo={this.addTodo} />
        <TodoList todoList={this.state.taskList} inputText={this.state.inputText}/>
      </div>
    );
  }
}

export default App;
