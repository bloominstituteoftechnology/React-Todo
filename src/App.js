import React from "react";
import ToDo from "./ToDo";

// App(parent)(form & button)
//     TodoList(items)
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItem: "",
      todoList: [],
      isComplete: false
    };
  }

  // updates as user types todo item
  handleAddTodo = (event) => {
    // updates state as user types a todo item
    this.setState({ todoItem: event.target.value });

    // console.log(event.target.value);
    // console.log(this.state.todoItem);
    event.preventDefault();
  };

  // adds new todo item to todo list
  // end of form submit - add one item at a time
  handleSubmitTodo = () => {
    // push new todo item to todoList
    const items = this.state.todoList;
    items.push(this.state.todoItem);
    // this.state.todoList.push(this.state.todoItem);
    // reset todoItem for the next todo item
    this.setState({ items, todoItem: "" });
    // console.log(items);
  };

 

  render() {
    return (
<<<<<<< HEAD
      <div>
      	<ToDo {...this.state} />
||||||| merged common ancestors
      <div>
        <ToDo {...this.state} />
=======
     <div>
        <ToDo {...this.state} />
>>>>>>> 721964165e301d76014f7232e18102286c3eeb3a
        <form>
          <input
            name="todoItem"
            value={this.state.todoItem}
            onChange={this.handleAddTodo}
            type="text"
            placeholder="todo list here"
          />
        </form>
        <button onClick={this.handleSubmitTodo}>add to do</button>
      </div>
    );        
  }
}
export default App;
