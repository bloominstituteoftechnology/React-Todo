import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"
import Todo from "./components/TodoComponents/Todo"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      doList: [
        
      ],
      addItems: ""
    };

    listChange = event => {
      console.log(event.target.value);
      // the way to update state in react! // LIFECYCLE FUNCTION
      this.setState({ addItems: event.target.value });
    };

    addTodo = () => {
      const doList = this.state.doList.slice();
      doList.push(this.state.addItems);
      this.setState({ doList: doList, addItems: "" });
    }

  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <input 
          type="text"
          onChange={this.listChange}
          placeHolder="Add Todo"
          value={this.state.addItems}
        />
        <button onClick={this.addTodo}>Add Todo..</button>
        <TodoList listItems={this.state.doList} />
      </div>
    );
  }
}

export default App;
