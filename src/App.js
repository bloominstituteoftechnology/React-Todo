import React from "react";
import TodoList from "../src/components/TodoComponents/TodoList";
import TodoForm from "../src/components/TodoComponents/TodoForm";
import Img from '../src/components/TodoComponents/Img';
import Music from '../src/components/Music';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      play: false,
      pause: true,
      search: "",
      todo: "",
      todos: []
    };
  }

  inputChange = event => {
    this.setState({
      todo: event.target.value
    });

    localStorage.setItem('todo', JSON.stringify(event.target.value));
  };

  addTodo = event => {
    event.preventDefault();
    this.setState({
        todos: [
          ...this.state.todos,
          {
            task: this.state.todo,
            id: Date.now(),
            completed: false
          }
        ],
        todo: ""
    });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    localStorage.setItem('todo', '');
  };

  clear = (event, todoComplete) => {
    event.preventDefault();
    const notDone = this.state.todos.filter(todo => todo.completed === false);
    console.log(notDone);
    this.setState({
      todos: notDone
    });
    localStorage.setItem('todos', JSON.stringify(notDone));
  };

  clickHandler = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            task: todo.task,
            id: todo.id,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  searchFunc = (event) => {
    const match = this.state.todos.filter(todo => todo.task.includes(this.state.search) ? todo : null);
    console.log(match);
    this.setState({
      search: event.target.value,
      todos: match
    })
    console.log(this.state.todos);
  };

  reload = () => {
    window.location.reload();
  };

  play = () => {
  this.setState({ play: true, pause: false })
    this.audio.play();
  }
  

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  };

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
    this.setState({
      todo: '',
    })
 };

  render() {
    this.url = "http://66.90.93.122/ost/super-mario-world-original-soundtrack/wmaahzolgz/3%20-%20Map%202%20%28Overworld%29.mp3";
    this.audio = new Audio(this.url);
    return (
      <div>
        <Img />
        <div className={'container'}>
          <Music play={this.play} />
          <h1>Todo List: MVP</h1>
          <TodoList todos={this.state.todos} clickHandler={this.clickHandler} />
          <TodoForm
            todos={this.state.todos}
            todo={this.state.todo}
            inputChange={event => this.inputChange(event)}
            addTodo={this.addTodo}
            clear={this.clear}
            search={this.state.search}
            searchFunc={this.searchFunc}
            reload={this.reload}
          />
        </div>
      </div>
    );
  }
}

export default App;
