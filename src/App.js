import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [
        {task: 'Go To Store',
         id: 123,
         completed: false},
        {task: 'Go To Work',
         id: 124,
         completed: false},
      ]
    }
;  }

    addItem = (e) => {
      let temp = {
        task: e.target.previousSibling.value,
        id: Date.now(),
        completed: false
      };

      this.setState({
        todo: [...this.state.todo, temp]
      })

      e.target.previousSibling.value = '';
    }

    enterItem = (e) => {
      if (e.charCode === 13) {
        let temp = {
          task: e.target.value,
          id: Date.now(),
          completed: false
        };
  
        this.setState({
          todo: [...this.state.todo, temp]
        })
  
        e.target.value = '';
    }
    }

    crossOut = (todoId) => {
      this.setState ({
        todo: this.state.todo.map(item => {
          if (item.id === todoId) {
            return {
              task: item.task,
              id: item.id,
              completed: !item.completed
            }
          } else {return item}
        })
      })
    }
  

  render() {
    return (
      <div>
        <TodoList 
         todoItems={this.state.todo} 
         strike = {this.crossOut} />
        <TodoForm 
         addClick = {this.addItem} 
         addEnter = {this.enterItem} />
      </div>
    )
  }
}


export default App
