import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      appStateTodos: [{
        todo: "ａｅｓｔｈｅｔｉｃ　のズ卸",
        id: 1,
        completed: false
      },
      {
        todo:"【﻿ＳＡＩＮＴ　ＰＥＰＳＩ　】",
        id: 2,
        completed: false
      },
      {
        todo:"ＭＡＣＩＮＴＯＳＨ　ＰＬＵＳ　－　リサフランク４２０　／　現代のコンピュー　|　セど易ふが委せ　",
        id: 3,
        completed: false
      }],
      inputText: "",
    };
  }

  addTodo = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        appStateTodos:
          [...this.state.appStateTodos,
            {todo: this.state.inputText,
              id: Date.now(),
              completed: false}],
        inputText: ""
      });
    }
  };

  removeCompleted = event => {
    event.preventDefault();
    let newTrimmedArray = [...this.state.appStateTodos];
    newTrimmedArray = newTrimmedArray.filter(element => {if (!element.completed) {return element}});
    this.setState({ appStateTodos: newTrimmedArray })
  }

  completeTodo = (id) => {
    newArray = [...this.state.appStateTodos];
    let newArray = newArray.map(element => {
      if (element.id === id) {element.completed = !element.completed}
      return element;
    }) 
    this.setState({ appStateTodos: newArray });
    };

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  render() {
    return (
      <div className="test">
        <TodoForm
          addTodo={this.addTodo}
          removeCompleted={this.removeCompleted}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
        />
        <TodoList completeTodo={this.completeTodo} todos={this.state.appStateTodos} />
      </div>
    );
  }
}

export default App;