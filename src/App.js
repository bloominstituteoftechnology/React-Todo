import React from 'react';
import TodoList from './components/TodoList';


const TodoArray = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      TodoArray
    }
  }

  toggleItem = (itemId) => {
    console.log('toggling item', itemId)
    this.setState({
      TodoArray: this.state.TodoArray.map((item)=>{
        if (itemId === item.id) {
          return {
            ...item, 
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      TodoArray: [ ...this.state.TodoArray, newItem]
    })
  }

  render() {
    return (
      <div>
        <TodoList addItem={this.addItem} toggleItem={this.toggleItem} TodoArray={this.state.TodoArray}/>
      </div>
    );
  }
}

export default App;
