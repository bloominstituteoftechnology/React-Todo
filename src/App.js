import React  from 'react';
import './App.css';

// views
import TodoList from './views/TodoList.js';


const list = [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 9999999999998,
          completed: false
        }, {
          task: 'Take Out The Trash',
          id: 9928817084258,
          completed: false
        }, {
          task: 'Feed The Cats',
          id: 6828815384358,
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

  handleComplete = (id) => {
   console.log('Clicked',id);
       this.setState({
         list: this.state.list.map((item) => {
           if (id === item.id) {
             return {
               ...item,
               completed: !item.completed
             }
           }
           return item
         })
       })
  }

  handleInputChange = (e, newtask) => {
    console.log(e.target.value);
    e.preventDefault();
    
    const newTask = {
      task: newtask,
      id: Date.now(),
      completed: false
    };

    this.setState({
      list: [...this.state.list, newTask]
    })

  }

  render() {
    return (
      <div className="app">
        <h1 className="header">
          Todo List App
        </h1>

        <TodoList 
          checkOff={this.handleComplete}
          addTask={this.handleInputChange}
          data={this.state.list} />
      </div>
    );
  }
}

export default App;

