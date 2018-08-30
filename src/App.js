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
      items:[],
      inputText: "",
    }
  };

  addItem = event => {
    event.preventDefault();
    if (this.state.inputText) {
      const newItems=this.state.items.slice();
      newItems.push({task: this.state.inputText, id: Date.now(), completed:false});
      this.setState({
        items: newItems,
        inputText: "",
        onClick : ()=> alert("hello"),
      });
    }
  };

  handleInput = event => {
    this.setState({inputText: event.target.value});
  };

  toggleCompleted = event =>{
    alert("work")
    // const clickedItem = event.target.value;
    // if(clickedItem !== this.state.)
  }

 clearCompleted = event => {
   event.preventDefault();

 }

  render() {
    return (
      <div className="todo-container">
        <h1>Todo List</h1>
        <TodoList 
          items={this.state.items}
          onClick={this.toggleCompleted}
        />
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
