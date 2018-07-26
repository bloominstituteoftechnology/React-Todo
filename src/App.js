import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";


class App extends React.Component {
	constructor() {
		super();

		this.state = {
			stateArray: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      msg: "",


		}
  }

  handleCompleted = ident => {
    const idArray = this.state.stateArray.slice().map( e => {
      if (ident === e.id) {
        let newObject = {
          ...e
        };
        newObject.completed = !newObject.completed;
        return newObject;
      }
      return e;
    });

    this.setState({ stateArray : idArray });
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleUpdateState();
    }
  }

	handleUpdateState = () => {
    const taskArray = this.state.stateArray.slice();
    taskArray.push({
      task: this.state.msg,
      id: Date.now(),
      completed: false,
    });

    this.setState({ stateArray : taskArray, msg: "",});
    
  };

  handleInputChange = event => {
    this.setState({ msg: event.target.value })
  }

  handleClear = even => {
    const clearArray = this.state.stateArray.slice().filter( e => e.completed === false);
    this.setState ({ stateArray : clearArray });
  }

	render() {
		return (
			<div>
				<TodoList onClick={ this.handleCompleted } array={ this.state.stateArray }/>
				<TodoForm value={ this.state.msg } onKeyPress = { this.handleKeyPress } onClear = { this.handleClear } onClick= { this.handleUpdateState } onChange={ this.handleInputChange }/>
			</div>
		);
	}
}

export default App;
