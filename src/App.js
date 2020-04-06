import React from 'react';
import Todo from './components/Todo.js';

const task = [
  {
    task: 'Mop Floor',
    id: `Mop Floor/${Date.now()}`,
    complete: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(props) {
    super(props);
    this.state = {
      task,
    };
  }

  // Add Items to state:
  addItem = (e, item) => {
    e.preventDefault()
    const newTask = {
    task: item,
    id = `${item}/${Date.now()}`,
    complete: false
    };
    this.setState({
      task: [...this.state.task, newTask]
    });
  }


  //toggle Completed:
  toggleComplete = itemId => {
    // Sets the State
    this.setState({
      // Maps The Array
      task: this.state.task.map(item => {
          // If ItemId is equal to the Id given, Then return the item as complete or incomplete based on state
        if (itemId === item.id){
          return {
            ...item,
            complete: !item.complete
          };
        };
        return item;
      })
    });
  };

  // Clear Completed Tasks:
  clearComplete = e => {
    e.preventDefault();
    this.setState({
      task: this.state.task.filter(item => !item.complete)
    });
  }




  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='appWrap'>
        <Todo add={this.addItem} clear={this.clearComplete} toggle={this.toggleComplete}/>
      </div>
    );
  }
}

export default App;
