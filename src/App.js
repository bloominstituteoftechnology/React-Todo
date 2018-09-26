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
      textInput: ""
    }//this.state
  }//constructor()

  printTodoTask = event => {
    this.setState({
      textInput: event.target.value
    })
  }

  // addTodoTask = event => {
  //   this.setState({
  //     // click button add todo to list
  //     todoArray: this.state.todoArray.push(this.state.textInput)
  //   })
  // }

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
          <input onChange={this.printTodoTask} /> <button onClick={this.addTodoTask}> Submit </button> <button> Clear All </button>
          <h3>This is a new task: {}</h3>


          <div>
            <h2>List external to App:</h2>
            <TodoList />
            <Todo />
            <TodoForm />
          </div>
           
      </div>
    );
  }
}

//functional component?
const TodoList = () => {
  return todoArray1.map((e) => {
    return (
      <div>
        {e.task}
      </div>
    )
  })
}

const Todo = () => {
  return (
    <div>
        This is the {todoArray1[0].task} task for {todoArray1[0].id} date
    </div>
  )
}

const TodoForm = props => {
  return (
    <div>
      <input placeholder="Add Tasks Here"/> <button> Add Todo </button> <button> Clear Completed </button>
    </div>
  )
};


export default App;
