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

  addTodoTask = task => {
    this.setState({todoArray: [...this.state.todoArray, task]})
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
          <input onChange={this.printTodoTask} /> <button onClick={this.addTodoTask}> Submit </button> <button> Clear All </button>
          <h3>This is a new task: {}</h3>


          <div>
            <h2>List external to App:</h2>
            <TodoList todos={this.state.todoArray}/>
            
            <TodoForm addTodoTask={this.addTodoTask}/>
          </div>
           
      </div>
    );
  }
}

//functional component?
const TodoList = (props) => {
  return props.todos.map((e) => {
    return (
      <div>
        <Todo todo={e}/>
      </div>
    )
  })
}

const Todo = (props) => {
  return (
    <div>
        This is the {props.todo.task} task for {props.todo.id} date
    </div>
  )
}

//turn into a class component
const TodoForm = props => {
  return (
    <div onClick={() => {props.addTodoTask({task: 'New Task', id: Date.now(), isCompleted: false})}}>Add Todo</div>
  )
};


export default App;
