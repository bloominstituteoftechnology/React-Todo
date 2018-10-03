import React from 'react';
import List from './components/TodoComponents/TodoList'


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state ={
      toDo: [{listItem:'Learn setState()', done:false}, {listItem:'Style my Todo List', done:false}]
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <List toDo={this.state.toDo} />
      </div>
    );
  }
}

export default App;
