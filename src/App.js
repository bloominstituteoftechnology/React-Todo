import React  from 'react';
import TodoList from './views/TodoList.js';


const list = [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }, {
          task: 'Take Out The Trash',
          id: 1528817084258,
          completed: false
        }, {
          task: 'Feed The Cats',
          id: 1528815384358,
          completed: false
        }]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(props){
    super(props);
    this.state = {
      list 
    }
  }

  addTodoTask = event => {

    console.log(event.target.value)
  } 

  checkTodo = event => {
    console.log(event.target.checked)
    
  }

  fetchId = id => {
    console.log(id);
    
    this.setState({
    
    
    })
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoList
         getId={this.fetchId}
         checked={this.checkTodo}
         addTask={this.addTodoTask} 
         data={this.state}/>
      </div>
    );
  }
}

export default App;

