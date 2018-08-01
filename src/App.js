import React from 'react';
import Todo from './components/TodoComponents/Todo.js';
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
const listArr = [
  {
    task: '',
    id: Date.now(),
    completed: false
  }
]

const list = props => {
  const {task, id, completed} = props.listProp
  return (
    <div>
      <p>{task}</p>
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: listArr
    };
  }

  handleUpdateState = () => {
    const listItems = this.state.list.slice();

    listItems.push({
      id: Date.now(),
      task: "",
      completed: false
    });
    this.setState({listItems: listItems});
  };

  
  render() {
    return (
      <div>
        <Todo />
      </div>
    );
  }
}

export default App;
