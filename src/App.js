import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list: [],
      inputText: "",
      completed: false,
    };
  }
  
  handleInput = event => {
    this.setState ({
      inputText: event.target.value
    });
  }
  add = event => {
    event.preventDefault();
    if(this.state.inputText){
      this.setState({
        list: [...this.state.list, this.state.inputText],
        inputText: ""
      });
    }
  };

  clearCompleted = event => {
    this.setState({
        list: [],
      });
  };

  toggle = event => {
    
  }

  render() {
    return (
      <div>
        <ToDoList list={this.state.list} />
        <ToDoForm
          inputText={this.state.inputText}
          handleInput={this.handleInput}
          addUser={this.add}
          clearList={this.clear}
        />
      </div>
    );
  }
}

export default App;