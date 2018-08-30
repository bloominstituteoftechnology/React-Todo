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

  handleInput = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  //handle click of 'Add Todo' button
  handleAddTodo = event => {
    event.preventDefault();
    if (this.state.inputText){
      this.setState({
        todo: [...this.state.todo, 
                {task: this.state.inputText,
                  id: Date.now(),
                  completed: false}
        ],
        inputText:""
       })
    }
  }

  //handle click of each todo item
  handleTodoClick = todoID => {
    // event.preventDefault();
    console.log(todoID);
    // let tempTodoList = this.state.todo.splice();
    // let tempTodoItem = tempTodoList.find( todoObject =>{
    //   return todoObject.task ===
    // });
    // console.log(tempTodoItem);
    // if (event.target.completed === false){
    //   this.setState({ 
    //     event.target.completed: true;
    //   })
    // }

    // document.getElementsByClassName('todoItem').classList.add("strikethrough");

  }

  //handle click of 'Clear Completed' button
  handleClearCompleted = event => {
    
  }
  
  render() {
    
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todoList={this.state.todo}
                  handleTodoClick={this.handleTodoClick} />
        <TodoForm handleInput={this.handleInput}
                  handleAddTodo={this.handleAddTodo}
                  inputText={this.state.inputText}  
                  handleClearCompleted={this.handleClearCompleted}
        />
      </div>
    );
  }
}

export default App;
