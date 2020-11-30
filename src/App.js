import React from 'react';
import ToDoForm from './components/TodoForm';
import ToDo from './components/Todo';
import './components/Todo.css'

const list = [
  {
    task: 'Project',
    id: 1,
    completed: false,
  },
  {
    task: 'thinkorswim',
    id: 2,
    completed: false,
  },
  {
    task: 'options',
    id: 3,
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: list
    }
  }

  
         componentWillUpdate(nextProps, nextState) {
           localStorage.setItem('ToDo list', JSON.stringify(nextState.list))
         }

         componentWillMount() {
          localStorage.getItem('ToDo list') && this.setState({
            list: JSON.parse(localStorage.getItem('ToDo list'))
          })
        }
        
         
  handleAdd = (name) => {
    console.log('made it')

    const newItem = [...this.state.list, 
      {task: name, 
        id: Date.now(), 
        completed: false
      }]

    this.setState({list: newItem})
  }

  handleToggle = (taskId) => {

    const toggleItem = this.state.list.map((item) => {
        if (taskId === item.id) {
         return({
          ...item,
          completed: !item.completed
         }) 
        } else {
          return(item)
        }
      })

      this.setState({list: toggleItem})
  }

  clearCompleted = (item) => {
   const newList = this.state.list.filter((item) => {
      return (!item.completed)
    })

    this.setState({list: newList})
  }


  render() {
    return (
      <div>
        {this.state.list.map((item, key) => {
          return <ToDo task={item} key={key} handleToggle={this.handleToggle}/>
        })}
        <ToDoForm handleAdd={this.handleAdd} clear={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
