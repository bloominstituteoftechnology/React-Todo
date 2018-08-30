import React from 'react';
// import ReactDom from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [],
      inputText: "",
      clicked:false,
    };
  }
  
  addUser = event => {
    event.preventDefault();
    if(this.state.inputText){
      this.setState({
        users: [...this.state.users, {task: this.state.inputText, id: Date.now(), completed:false} ],
        inputText: ""
      });
    }
  };

//  toggleToDOComplete = id => {
//    let newTodos = [...this.state.users];
//    let newTodos = newTodos.map(inputText =>{
//      if (inputText.id === id){
//        inputText.completed = !inputText.completed;
//        return inputText;
//      } else{
//        return inputText;
//      }
//    })
//  }

  
  handleInput = event => {
    this.setState ({
      inputText: event.target.value
    });
  };

  onClickMe = () => {
    this.setState({clicked:!this.state.clicked});
  }

  render() {
    return (
      <div>
        <h1>ToDo List:MVP</h1>
        <TodoList usersProps={this.state.users} />
        <TodoForm
          addUser={this.addUser}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
// ReactDom.render(<app />, rootElement);