import React from 'react';
import { TodoButton } from './components/TodoComponents/TodoForm'
import { TodoInput } from './components/TodoComponents/TodoForm'
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()

    // Initilizing the state
    //Creating a state for item array.

    this.state = {
      items: []
    }

    console.log(this.state.items);

  }
  addToInput = () => {
    this.setState({
      items: this.state.items,
      key: Date.now()
    })

    this.setState({ items: "" })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoInput /> {" "}
        <TodoButton buttonStyle={'todobtn'} handleClick={this.addToInput} text={"Add Todo"} /> {" "}
        <TodoButton buttonStyle={'todobtn'} text={"Clear Completed"} />
      </div>
    );

  }
}

export default App;
