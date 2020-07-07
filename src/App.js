import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'

const list = [
  {
    task: 'Test',
    id: 1,
    done: false
  },
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
     list
    };
  }
  addItem = (itemName) =>{
    const newItem={
      task: itemName,
      id: Date.now(),
      done: false,
    }
   this.setState({
     list: [...this.state.list, newItem]
   })
  }

  toggleItem=(itemId)=>{
    this.setState({
      list: this.state.list.map(item => {
        if(item.id === itemId){
          return {
            ...item,
            done: !item.done
          };
        }
        else{
          return item;
        }
      })
    })
  }

  clearDone = e => {
   e.preventDefault();
   this.setState({
     list: this.state.list.filter(item => !item.done)
   });
 };
  render() {
    return (
      <div>
        <h1>Todo</h1>
        <TodoForm  addItem={this.addItem}/>

        <TodoList
        toggleItem={this.toggleItem}
        list={this.state.list} 
        onchange={this.state.onchange} 
        value ={this.state.value}
        clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default App;
