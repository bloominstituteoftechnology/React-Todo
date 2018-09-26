import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        {id:1, task:'test', complete:false}
      ],
      task: ""
    };
  }

  handleInput = event => {
    this.setState({ task: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.list);
    let newArray = this.state.list;
    newArray.push({
      id: Date.now(),
      task: this.state.task,
      complete: false
    });
    this.setState({newArray, task: "" });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {/* <form>
          Todo:{" "}
          <input
            type="text"
            placeholder="get milk"
            value={this.state.task}
            onChange={this.handleInput}
          />
          <input type="submit" onClick={this.handleSubmit} />
        </form> */}
        <TodoForm
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          value={this.state.task}
        />
        <ul>
          {this.state.list.map(item => (
            <li key={item.id}>{item.task}</li>
          ))}
        </ul>
        <input type="submit" value="Clear" />
      </div>
    );
  }
}

export default App;

// <ul>{this.state.list.map(item => <li key={item}>{item}</li>)}</ul>
//App will contain a return with:

// <h1></h1>
// <TodoList />
// <TodoForm />

// TodoForm.js will return:

// <input>
// <button>
// <button>

// TodoList.js will return:
// <ul>
// props.array.map(
// return (<Todo/>)
// )
// </ul>

// Todo.js will return:
// <li></li>
