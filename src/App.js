import React from 'react';


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


  // clearCompleted = (id) => {
  //   const todoArr = [...this.state.todoArray];
  //   todoArr.filter((todo,index) => {
  //     if (todo.isCompleted) {
  //       console.log(index)
  //       todoArr.splice(index,1)
  //       // this.deleteByValue();
  //     }
  //   })
  //   this.setState({ todoArray: todoArr})
  // }


  clearCompleted = (id) => {
    let todoArr = [...this.state.todoArray];
    todoArr = todoArr.filter((todo) => { return !todo.isCompleted} );
    this.setState({ todoArray: todoArr})
  }

  // deleteByValue = () => {
  //   const todoArr = [...this.state.todoArray];
  //   for(let i in todoArr) {
  //     if (todoArr[i].isCompleted === true) {
  //       delete todoArr[i];
  //     }
  //   }
  // }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      
          <div>
            <h2>List starts here:</h2>
            <TodoList 
                todos={this.state.todoArray} 
                changeTaskStatus={this.changeTaskStatus} 
                toggleCompleted={this.toggleCompleted}/>    
            <TodoForm 
                addTodoTask={this.addTodoTask} 
                printTodoTask={this.printTodoTask} 
                addTextInput={this.state.textInput} 
                handleClickClear={this.handleClickClear} 
                textInput={this.state.textInput}
                clearCompleted={this.clearCompleted}
                />  
            <TextInputDisplay 
                addTextInput={this.state.textInput} />
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
      <ul>
        <li><Todo key={e.id} todo={e} toggleCompleted={props.toggleCompleted}/></li>
      </ul>
    )
  })
}




// the <Todo /> functional component is defined here; it has access to the properties of each todo 'object' (i.e., task, id)
// it calls the properties of each todo 'object' through props.todo
class Todo extends React.Component {
  render() {

    return (
      <div key={this.props.todo.id} onClick={() => this.props.toggleCompleted(this.props.todo.id)} style={{textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'}}>
          This is the {this.props.todo.task} task for {this.props.todo.id} date is completed?: {this.props.todo.isCompleted.toString()}.
      </div>
    )
  }
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


// class TodoForm extends React.Component {
//   render() {
//     return (
//       <div>
//           <input value={this.props.textInput} onChange={this.props.printTodoTask} placeholder="placeholder text"/>
//           <button onClick={() => {this.props.addTodoTask({task: this.props.addTextInput, id: Date.now(), isCompleted: false})}}>Add Todo</button>
//           <button onClick={this.props.handleClickClear}>Clear Button</button>
//           <button onClick={this.props.clearCompleted}>Clear Completed Task</button>
//       </div>
//     )
//   }
// }


// class TodoForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event){
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     // alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Todo Task: 
//           <input type="text" value={this.props.textInput} onChange={this.props.printTodoTask} placeholder="placeholder text"/>
//         </label>
//           <input type="submit" value="Submit"/>
//           <button onClick={() => {this.props.addTodoTask({task: this.props.addTextInput, id: Date.now(), isCompleted: false})}}>Add Todo</button>
//           <button onClick={this.props.handleClickClear}>Clear Button</button>
//           <button onClick={this.props.clearCompleted}>Clear Completed Task</button>
//       </form>
//     )
//   }
// }// class TodoForm


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {task: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.props.printTodoTask
    this.setState({
        task: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.props.addTodoTask({task: this.props.addTextInput, id: Date.now(), isCompleted: false});
    this.props.addTodoTask({task: this.state.task, id: Date.now(), isCompleted: false});
    this.props.handleClickClear;
    this.props.clearCompleted;
    this.setState({task: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>
              Todo Task: 
              <input type="text" value={this.state.task} onChange={this.handleChange} placeholder="placeholder text"/>
            </label>

            <button type="submit">Add Todo</button>
        </form>

        <button onClick={this.props.clearCompleted}>Clear Completed Task</button>
      </div>
    )
  }
}// class TodoForm

export default App;
