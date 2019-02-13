import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoObject: [],
      taskTyped: ''
    };

    this.onTaskTypeChange = this.onTaskTypeChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

  onTaskTypeChange = event => {
    this.setState({
      taskTyped: event.target.value
    });
  };

  onAddClick = () => {
    this.setState(st => ({
      todoObject: st.todoObject.concat({
        task: st.taskTyped,
        id: st.todoObject.length + 1,
        completed: false
      })
    }));
    this.clearInputs();
  };

  onEnter = event => {
    if (event.key === 'Enter') {
      this.setState(st => ({
        todoObject: st.todoObject.concat({
          task: st.taskTyped,
          id: st.todoObject.length + 1,
          completed: false
        })
      }));
      this.clearInputs();
    }
  };

  clearInputs = () => {
    this.setState({
      taskTyped: ''
    });
  };

  onComplete = props => {
    let newList = this.state.todoObject.map(item => {
      if (item.id === props) {
        item.completed = true
        return item
      }
      else {
        return item
      }
    })

   console.log(newList);
   this.setState({todoObject: [...newList]})
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList
          onComplete={this.onComplete}
          todoObject={this.state.todoObject}
        />
        <TodoForm
          typeValue={this.state.taskTyped}
          onTaskTypeChange={this.onTaskTypeChange}
          onAddClick={this.onAddClick}
          onEnter={this.onEnter}
        />
      </div>
    );
  }
}

export default App;
