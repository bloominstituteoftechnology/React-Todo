import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
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
      inputText: ''
    };
  }


  changeText = event => {
    event.preventDefault();
    this.setState({inputText: event.target.value});
  }

  addNewTodo = event => {
    event.preventDefault();
    if(this.state.inputText) {
      this.setState({
        tasks: [
          ...this.state.tasks,
          { task: this.state.inputText,
            id: Date.now(),
            completed: false
          }
        ], inputText: ''
      });
    }
  };

  // todoClickHandler = event => {
  //   event.preventDefault();
  //   this.setState(
  //     this.completed: !this.completed;
  //   );
  // }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          addNewTodo={this.addNewTodo}
          changeText={this.changeText}
          inputText={this.state.inputText} 
          tasks={this.tasks}
        />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
