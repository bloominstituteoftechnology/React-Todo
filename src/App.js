import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'

const initialList = [
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
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: initialList
    }
  }

  handleToggle = (itemId) => {
    this.setState({
      list: this.state.list.map(item=>{
        if(item.id === itemId){
          return {
            ...item,
            completed: !item.completed
          }
        }else{
          return item
        }
      })
    })
  }

  handleAddItem = (newItem) => {
    this.setState({
      list: [...this.state.list, {
        task: newItem,
        id: Date.now(),
        completed: false
      }]
    })
  }

  clearItems = () => {
    this.setState({
      list:this.state.list.filter(item=>(!item.completed))
    })
  }

  render() {
    return (
      <div className='app'>
        <TodoList handleToggleItem={this.handleToggle} list={this.state.list} />
        <TodoForm handleAddItem={this.handleAddItem} clearItems={this.clearItems}/>
      </div>
    );
  }
}

export default App;
