import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state = {
      todos: [
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
      taskTitle: ''
    }
  }

  handleChnage = (event)=>{
    // debugger
    this.setState({
      taskTitle: event.target.value,
    })
  }

  updateList = () => {
    const newTask = {
      id: Date.now(),
      task: this.state.taskTitle,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTask],
    })
    console.log("====Yest", this.state)
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.todos}/>
        <TodoForm
        value={this.state.taskTitle}
        handleChange = {this.handleChnage}
        updateList = {this.updateList}
        />
      </div>
    );
  }
}

export default App;
