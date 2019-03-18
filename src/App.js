import React, {Component} from "react";
import TodoForm from "./components/TodoComponents/TodoForm";


class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Be a Lumberjack',
          id: 1528817078886,
          completed: false
        },
        {
          task: 'Cook Steak',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Chop Lumber',
          id: 1528817084358,
          completed: false
        }, 
        {
          task: 'Wear Flannel',
          id: 1528817095747,
          completed: false
        }
      ]

    };
  }

  render() {
    return (
      <div>
        <h1>ToDo List: MVP</h1>
        <TodoForm />
      </div>
    );
  }
}

export default App;
