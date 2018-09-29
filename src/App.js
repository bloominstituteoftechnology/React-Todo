import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TextInputDisplay from './components/TodoComponents/TextInputDisplay';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoArray: [
        {
          task: 'Fork & Clone',
          id: 1,
          isCompleted: false
        },
        {
          task: 'Submit Pull Request',
          id: 2,
          isCompleted: false
        },
        {
          task: 'Create functionality',
          id: 3,
          isCompleted: false
        },
        {
          task: 'Add styling',
          id: 4,
          isCompleted: false
        }
      ],
      textInput: "",
      controlledText: ""
    }//this.state
  }//constructor()

  printTodoTask = event => {
    this.setState({
      textInput: event.target.value
    })
  }

  //handler function that adds task to the todoArray in state --pass object into setState()
  addTodoTask = task => {
    this.setState({todoArray: [...this.state.todoArray, task]})
  }

  //handler function that adds textInput into todoArray in state --pass object into setState()
  addTextInput = textInput => {
    this.setState({todoArray: [...this.state.todoArray, textInput]})
  }

  //add handler function that clears text
  handleClickClear = () => {
    this.setState({
      textInput: "",
    })
  }

  toggleCompleted = (id) => {
    const todoArr = [...this.state.todoArray];
    todoArr.forEach(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
        return todo;
      } 
    })
    this.setState({ todoArray: todoArr})
  }


  clearCompleted = (id) => {
    let todoArr = [...this.state.todoArray];
    todoArr = todoArr.filter((todo) => { return !todo.isCompleted} );
    this.setState({ todoArray: todoArr})
  }


  render() {
    return (
      <div>
          <div>
            <h2 class="todo-heading">Todos</h2>
            
            <TodoForm 
                addTodoTask={this.addTodoTask} 
                printTodoTask={this.printTodoTask} 
                addTextInput={this.state.textInput} 
                handleClickClear={this.handleClickClear} 
                textInput={this.state.textInput}
                clearCompleted={this.clearCompleted}
                />  
            <TodoList 
                todos={this.state.todoArray} 
                changeTaskStatus={this.changeTaskStatus} 
                toggleCompleted={this.toggleCompleted}/> 
            <TextInputDisplay 
                addTextInput={this.state.textInput}
                clearCompleted={this.clearCompleted} />
          </div>
          
      </div>
    );
  }
}

// NOTE: <TodoForm /> is a function that takes in three arguments 'addTodoTask', 'printTodoTask' and 'addTextInput'
// you can set the arguments to anything, including what's already in 'state' (i.e., this.state.todoArray, this.state.textInput)
// State-to-Props happens when you call the function arguments OUTSIDE of App such as..
// props.todos (App-state-to-TodoList-props); props.todo.task (parent-to-child); props.addTextInput (App-Parent-to-TextInputDisplay-Function-child)
// props.printTodoTask (App-Parent-to-TodoForm-function-child); props.addTextInput (App-state-to-TodoForm-props)

//functional component takes "todos" property which is linked to 'todoArray', iterates and returns each 'object' within the array
//each 'object' within array is returned as a <Todo /> component, which has property 'todo' (singular)

// the <Todo /> functional component is defined here; it has access to the properties of each todo 'object' (i.e., task, id)
// it calls the properties of each todo 'object' through props.todo

// Trick is to set task to 'props.addTextInput', which is the name of the argument AND handler-function (so technically, it's a call-back?) to task. 
//turn into a class component


export default App;
