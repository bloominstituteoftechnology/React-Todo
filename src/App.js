import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      items:[{task:"Your list starts here...", id:"", completed:false}],
      inputText: "",
    }
  };

  addItem = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        items:[...this.state.items, 
              {task: this.state.inputText,
               id: Date.now(),
              completed:false}],
        inputText: "",
      });
    }
  };

  handleInput = event => {
    this.setState({inputText: event.target.value});
  };

  render() {
    return (
      <div className="todo-container">
        <h1>Todo List</h1>
        <TodoList items = {this.state.items}/>
        <TodoForm
          inputText={this.state.inputText}
          handleInput={this.handleInput}
          addItem={this.addItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}//App bracket

export default App;
