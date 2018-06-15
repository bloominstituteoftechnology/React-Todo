import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import ItemsList from './components/TodoComponents/TodoList';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemsList: [
        { task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }],
      listItem: ""
    };
    }
    changeEventHandler = event => {
      this.setState({ listItem: event.target.value });
    }
    addItem = () => {
      const itemsList = this.state.itemsList.slice();
      itemsList.push({task:this.state.itemsList, id:Date.now(), completed:false});
      this.setState({ itemsList, listItem: ""});
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <ItemsList />
      </div>
    );
  }
}

export default App;
