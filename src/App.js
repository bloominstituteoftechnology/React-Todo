import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const todo = [
  {
    id: 111,
    name: 'Walk the Dog',
    completed: false
  },
  {
    id: 222,
    name: 'Take out trash',
    completed: false
  },
  {
    id: 333,
    name: 'Wash dishes',
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
      this.state = {
        todo: todo,
      };
  };
 
  toggleItem = clickedId => {
    const newTodo = this.state.todo.map(item => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      };
    });

    this.setState({
      todo: newTodo
    });
  };

  addNewItem = itemText => {
    const newTodo = {
      id: Date.now(),
      name: itemText,
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  };

  render() {
    console.log('rendering...');
    return (
      <div>
        <h2>Todo List!</h2>
        
        <TodoList
        todo={this.state.todo} 
        toggleTodo={this.toggleTodo}
        />
        <TodoForm addNewItem={this.addNewItem}/>
      </div>
    );
  }
};

export default App;
