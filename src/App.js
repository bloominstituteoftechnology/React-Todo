import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm'


const listData = [
  {
    task: 'Clean bedroom',
    id: 1234,
    completed: false
  },
  {
    task: 'Wash dishes',
    id: 1235,
    completed: false
  }
]

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
        {task: this.state.inputText}
      ],
     inputText: ''
    });
  };
  
  render() {
    return (
      <div className="App">
        <Todo list = {this.state.list} />
        <TodoForm 
          addItem = {this.addItem}
          inputText= {this.state.inputText}
          handleChange= {this.handleChange} />

      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement)