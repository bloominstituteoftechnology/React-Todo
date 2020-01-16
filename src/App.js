import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const itemData = [
  {
    task: 'create list',
    id:  1,
    completed: false
  },
  {


  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super();
    this.state ={
      itemData
    };
  }
  
  toggleItem = itemID => {
    this.setState({
      itemData: this.state.itemData.map(item => {
        if (itemID === item.id){
          return {
            ...item,
            completed: !item.completed
          };
        } 
        return item;
        
      })

    });
  };

  addItem

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
