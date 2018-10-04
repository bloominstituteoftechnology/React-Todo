import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      todoItem: ''
    }
  }

  changeHandler = event => {
    this.setState({ todoItem: event.target.value });
  }

  addToList = event => {
    event.preventDefault();
    this.setState({
      todoList: [...this.state.todoList, this.state.todoItem],
      todoItem: ''
    });
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>This is the stuff you need to do!</h1>
        <TodoForm 
          changeHandler={this.changeHandler}
          todoItem={this.state.todoItem}
          todoList={this.state.todoList}
          addToList={this.addToList}
        />
      </div>
    );
  }
}

export default App;
