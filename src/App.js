import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listItems: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
      ],
    };
  }

  addItem = (event) => {
    console.log(event.target.value);
  }


  render() {
    return (
      <div className="list-container">
        <TodoForm addItem={this.addItem}/>
        <TodoList listItem={this.state.listItems} />
      </div>
    );
  }
}

export default App;
