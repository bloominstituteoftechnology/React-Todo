import React from 'react';

const todoArray1 = [
  {
    task: 'Fork & Clone',
    id: Date.now(),
    isCompleted: false
  },
  {
    task: 'Submit Pull Request',
    id: Date.now(),
    isCompleted: false
  },
  {
    task: 'Create functionality',
    id: Date.now(),
    isCompleted: false
  },
  {
    task: 'Add styling',
    id: Date.now(),
    isCompleted: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoArray: [
        {
          task: 'Fork & Clone',
          id: Date.now(),
          isCompleted: false
        },
        {
          task: 'Submit Pull Request',
          id: Date.now(),
          isCompleted: false
        },
        {
          task: 'Create functionality',
          id: Date.now(),
          isCompleted: false
        },
        {
          task: 'Add styling',
          id: Date.now(),
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


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h3>List starts here:</h3>
          <div>
            <h2>List internal to App:</h2>
            {this.state.todoArray.map((e) => {
              return (
                <div>
                  {e.task}
                </div>
              );
            })}
            <div><h3>{this.state.textInput}</h3></div>
          </div>
          <input value={this.state.textInput} onChange={this.printTodoTask}/> <button onClick={this.addTodoTask}> Submit </button> <button onClick={this.handleClickClear}> Clear All </button>
          
          
          
          <h3>This is a new task: {}</h3>
          <div>
            <h2>List external to App:</h2>
            <TodoList todos={this.state.todoArray} />    
            <TodoForm addTodoTask={this.addTodoTask} printTodoTask={this.printTodoTask} addTextInput={this.state.textInput} handleClickClear={this.handleClickClear} textInput={this.state.textInput}/>  
            <TextInputDisplay addTextInput={this.state.textInput} />
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
const TodoList = (props) => {
  return props.todos.map((e) => {
    return (
      <div>
        <Todo todo={e}/>    
      </div>
    )
  })
}

// the <Todo /> functional component is defined here; it has access to the properties of each todo 'object' (i.e., task, id)
// it calls the properties of each todo 'object' through props.todo
const Todo = (props) => {
  return (
    <div>
        This is the {props.todo.task} task for {props.todo.id} date 
    </div>
  )
}

const TextInputDisplay = props => {
  return (
    <div>
        {props.addTextInput}
    </div>
  )
}


// Trick is to set task to 'props.addTextInput', which is the name of the argument AND handler-function (so technically, it's a call-back?) to task. 
//turn into a class component
const TodoForm = props => {
  let currentDate = new Date();
  return (
    <div>
      <input value={props.textInput} onChange={props.printTodoTask} placeholder="placeholder text"/>
      <button onClick={() => {props.addTodoTask({task: props.addTextInput, id: currentDate.toDateString(), isCompleted: false})}}>Add Todo</button>
      <button onClick={props.handleClickClear}>Clear Button</button>
    </div>
  )
};



export default App;
