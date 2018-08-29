import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo:[{
              task: 'Organize Garage',
              id: 1528817077286,
              completed: false
            },
            {
              task: 'Bake Cookies',
              id: 1528817084358,
              completed: false
            }
          ],
      inputText:""

    };
  }

  handelInput = event => {
    event.preventDefault();
    this.setState({
      inputText: event.target.value
    })

  }

  //handle click of to 'Add Todo' button
  handleTodoClick = event => {
    event.preventDefault();
    this.setState({
      todo: [...this.state.todo, 
               {task: this.state.inputText,
                id: Date.now(),
                completed: false}
      ]
    })
    this.state.inputText="";
  }

  handleClearCompleted(){

  }
  
  render() {
    
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todoList={this.state.todo} />
        <TodoForm handleInput={this.handelInput}
                  handleTodoClick={this.handleTodoClick}
                  inputText={this.state.inputText}  
                  handClearCompleted={this.handClearCompleted}
        />
      </div>
    );
  }
}

export default App;
