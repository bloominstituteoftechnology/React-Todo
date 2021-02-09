import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


class App extends React.Component {
  state = {
    todos: [
      {
        task: "Bake",
        id: 1528817077286,
        completed: false,
      },
      {
        task: "Bake More",
        id: 1528817084358,
        completed: false,
      },
    ], formValue: ""
  }

  inputChangeHandler = (e) => {
    this.setState({ formValue: e.target.value });
  };

  formSubmitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      task: this.state.formValue,
      id: Date.now(),
      completed: false,
    };

    this.setState({ todos: this.state.todos.concat(newTask), formValue: '' });
  }

  clearCompleteHandler = () => {
    const filteredTodos = this.state.todos.filter(item => item.completed === false)
    this.setState({todos: filteredTodos})
  }


  toggleComplete = (e) => {
    // console.log(+e.target.id)
    // console.log(Number(e.target.id)) //*same!
    const modifiedState = this.state.todos.map(item => {
      if(item.id ===  e.target.id){
        return {
          ...item,
          completed: !item.completed,
        }
      } else {
        return item;
      }
    })
    this.setState({todos: modifiedState})
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoForm handleSubmitHandler={this.handleFormSubmit} formValue={this.state.formValue} clearCompleteHandler={this.clearCompleteHandler} inputChangeHandler={this.inputChangeHandler}></TodoForm>
        <TodoList todos={this.state.todos} toggle={this.toggleComplete} />
      </div>
    );
  }
}

export default App;
