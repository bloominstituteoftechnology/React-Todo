import React from 'react';

import TodoList from './components/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super()
    this.state = [
      {
        task: '',
        id:'',
        completed: '',
      }
    ]
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleClear = () => {

  }

  handleSubmit = () => {
    console.log(this.state)
  }

  handleAdd = () => {

  }

  render() {
    return (
      <div>
        <TodoList
        tdList={this.state}
        handleClear={this.handleClear}
        handleSubmit={this.handleSubmit}
        handleAdd={this.handleAdd}
        />
      </div>
    );
  }
}

export default App;
