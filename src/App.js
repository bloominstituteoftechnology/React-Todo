import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      todoObject: [
        {
          task: 'Organize Garage',
          id: 100,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 101,
          completed: false
        },
      ], taskTyped: '',
    }

    this.onTaskTypeChange = this.onTaskTypeChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onTaskTypeChange  = event => {
    this.setState({
      taskTyped: event.target.value,
    });
  }

  onAddClick = () => {
    this.setState(st => ({
      todoObject: st.todoObject.concat({'task': st.taskTyped, 'id': st.todoObject.length + 1, 'completed': false})
    }))
    this.clearInputs();
  }

  onEnter = event => {
    if (event.key === 'Enter'){
    this.setState(st => ({
      todoObject:st.todoObject.concat({'task': st.taskTyped, 'id': st.todoObject.length + 1, 'completed': false})
    }))
    this.clearInputs();
  }
}

  clearInputs = () => {
    this.setState({
      taskTyped: '',
    })
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList todoObject={this.state.todoObject} />
        <TodoForm typeValue={this.state.taskTyped} onTaskTypeChange={this.onTaskTypeChange} onAddClick={this.onAddClick} onEnter={this.onEnter}/>
      </div>
    );
  }
}

export default App;
