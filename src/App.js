import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo.css'

const listData = []


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      list: listData,
      inputText: '',
    };
  }
  handleChange = event => {
    this.setState ({
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };
  
  addItem = ev => {
    ev.preventDefault();
    this.setState ({
      list: [
        ...this.state.list,
        {task: this.state.inputText, id: Date.now(),completed: 'false' }
      ],
     inputText: ''
    });
  };
  
  changeStatus = id => {
    this.setState({
      list: this.state.list.map(lists => {
        if (lists.id === id) {
          return {
            ...lists,
            completed: lists.completed === 'false' ? 'true' : 'false'
          };
        } else {
          return lists;
        }
      })
    })
  }

  clearCompleted = ev => {
    ev.preventDefault();
    this.setState({
      list: this.state.list.filter(lists => lists.completed === 'false') 
      });
  }



  render() {
    return (
      <div className="App">
       <h2> To-Do List</h2>
        <Todo 
        list = {this.state.list}
        changeStatus= {this.changeStatus} />
        <TodoForm 
          clearCompleted = {this.clearCompleted}
          addItem = {this.addItem}
          inputText= {this.state.inputText}
          handleChange= {this.handleChange}
          
           />

      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement)