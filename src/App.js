import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  state = {
    inputText : ""
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    handleChange = e => {
      this.setState({
        [e.target.name]:e.target.value
      })
    }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm {...this.state} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
