import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";


class App extends React.Component {
  constructor() {
    super();
    this.state = {

        userInput: "",


      todos: [


      ]

    }
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    },)

    

  }
  


render() {
  return (
    <div className="to-do-main">
      <input
      onChange={ (e)=>this.changeUserInput(e.target.value)}
      value={this.state.userInput}
      type='Add an item'
      />
      <button>
        Add New
      </button>
      <button>
        Clear
      </button>
      <TodoList todos= {this.state.todos} />
      <TodoForm />
    </div>
  );

}

}







       
       

  

export default App;
