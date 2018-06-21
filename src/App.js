import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      listItems: [  {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }],
      inputListItem: ''
    };
  }


  toggleStrike = id => {
    let items = this.state.slice();
  };

  render() {

    console.log('RENDER IS BEING CALLED')

    return (
      <div className='app-container'>
        <h1 className='header'>Todo List: MVP</h1>
        <ToDoList 
          list={this.state.listItems}
        />
        <ToDoForm
          inputItem={this.state.inputListItem}
        />
      </div>
    );
  }
}

export default App;

