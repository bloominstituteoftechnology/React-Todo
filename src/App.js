import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import '../src/components/Todo.css'

const list = [
  {
    task: 'Create To do App',
    id: 1528817084359,
    completed: false
  },
  {
    task: 'Finish Project',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Study',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Walk Dog',
    id: 1528817084355,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = { list };
  }
  // hook version: const [state, setState] = useState(list)

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    })
  }

  toggleItem = itemId => {
    console.log('TodoForm: toggleItem: itemId:', itemId);
    this.setState({
      list: this.state.list.map(item => itemId === item.id ? {...item, completed: !item.completed} : item)
  });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          addItem = { this.addItem }
        />
        <TodoList 
          list = { this.state.list } 
          toggleItem = { this.toggleItem }
          clearCompleted = { this.clearCompleted }
        />
      </div>
    );
  }
}

export default App;
