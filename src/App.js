import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      inputText: ""
    };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.setState({
      ...this.state.data,
      data: [{ text: this.state.inputText }]
    });
  };

  render() {
    const { data, inputText } = this.state;

    return (
      <div>
        <TodoList data={data} />
        <TodoForm
          inputText={inputText}
          submitHandler={this.submitHandler}
          onChangeHandler={this.onChangeHandler}
        />
        <p>TEST</p>
      </div>
    );
  }
}

export default App;
