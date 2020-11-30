import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
const initialList = [
  {
    task: "example: Do Laundry",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "example: empty dishwasher",
    id: 1528817084358,
    completed: false,
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  //CCS
  constructor() {
    super();
    this.state = {
      list: initialList
    }
  }

  handleToggle = (itemId) => {
    this.setState({
      list: this.state.list.map(item => {
        if(item.id === itemId){
          return {
            ... item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  handleAddItem = (newItem) => {
    this.setState({
      list:[...this.state.list, {
        task: newItem,
        id: Date.now(),
        completed: false
      }]
    })
  }

  clearItem = () => {
    this.setState({
      list: this.state.list.filter(item=>(!item.completed))
    })
  }
  render() {
    return (
      <div className="app">
        <TodoList handleToggleItem={this.handleToggle} list={this.state.list} />
        <TodoForm handleAddItem={this.handleAddItem} clearItems={this.clearItems} />
      </div>
    );
  }
}

export default App;
