import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import '../src/components/TodoComponents/Todo.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{
          task: 'take garbage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'eat dinner',
          id: 1528817077243,
          completed: false
        }
      ],
      input: ''
    };
  }

  // addTodo = event => {
  //   event.preventDefault();
  //   if (this.state.input) {
  //     this.setState({
  //       todos: [...this.state.todos, this.state.input],
  //       input: ""
  //     });
  //   }
  // };


  // bindings go here unless implied

  addTask = event => {
    event.preventDefault();
    if (this.state.input === "") {
      return;
    }
    const tasks = this.state.tasks.slice();
    tasks.push({
      task: this.state.input,
      id: Date.now(),
      completed: false
    });

    this.setState({
      tasks: tasks,
      input: ''
    });
  }


  handleInput = event => {
    this.setState({
      input: event.target.value
    });
  }

  // // 
  //   clearList = event => {
  //     event.preventDefault();
  //     let tasks = this.state.tasks.slice();
  //     tasks = tasks.filter(item => !item.completed);
  //     this.setState({tasks : tasks});
  //   }

  // clearList = event => {
  //   event.preventDefault();
  //   this.setState({
  //     todos: [],
  //     input: ""
  //   });
  // };


  // toggleComplete = id => {
  //   //   let tasks = this.state.tasks.slice();
  //   //   tasks = tasks.map(item => {
  //   //     if (item.id === id) {
  //   //       item.completed = !item.completed;
  //   //       return item;
  //   //     } else {
  //   //       return item;
  //   //     }
  //   //   });
  //   //   this.setState({tasks});
  //   // }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return ( <
      div className = 'container' >

      <
      TodoForm value = {
        this.state.input
      }
      handleInput = {
        this.handleInput
      }
      addTask = {
        this.addTask
      }
      /> <
      TodoList tasks = {
        this.state.tasks
      }
      />

      <
      /div>

      // <div>
      // <TodoList todo={this.state.todo} />
      // <TodoForm 
      // addTodo={this.addTodo}
      // input = {this.state.input}
      // handleInput={this.handleInput}
      // />
      // </div>


    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render( < App / > , rootElement);

export default App;