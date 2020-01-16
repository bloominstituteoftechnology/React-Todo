import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //task object example:
  // {
  //   task: 'Organize Garage',
  //   id: 1528817077286,
  //   completed: false
  // }

  constructor() {
    super();
    this.state = {
      todoData:
        [],
      idCounter: 0
    };

    this.newTodo = this.newTodo.bind(this);//found this on Google, I have no idea what it does but it fixed a bug where this.state was undefined. Reminder to Google bind() if I have extra time.
    this.clearCompleted = this.clearCompleted.bind(this);
    this.setCompleted = this.setCompleted.bind(this);
  }

  newTodo(newTodoData) {
    //set state to a new array containing the old list data, plus our new todo (concat doesn't mutate original, and returns the new array. works nicely for this)
    this.setState({todoData: this.state.todoData.concat({
      task: newTodoData,
      id: this.state.idCounter,
      completed: false
    })});
    this.setState({ idCounter: this.state.idCounter + 1 })
    console.log(this.state);
  }

  clearCompleted() {
    this.setState({todoData: this.state.todoData.filter(item => {return !item.completed} )});//set state to state with completed tasks filtered out
  }

  setCompleted(task) {

    console.log("taskName", task);

    let indexToChange;

    this.state.todoData.forEach((item, index) => {
      console.log("looping", index);
      if(item.id === task.id){
        indexToChange = index;
      }
    });

    console.log("indexToChange", indexToChange);

    let newTodoData = this.state.todoData.slice();//Google says .slice() will clone the array. I want a clone cause I don't want to be tryna edit state, I want to use setState for that.

    console.log("this.state.todoData undefined? ", this.state.todoData)
    console.log("newTodoData undefiuned? ", newTodoData);

    newTodoData[indexToChange].completed = true;

    this.setState({todoData: newTodoData});

  }

  render() {
    return (
      <div>{/* Is passing callbacks the best way to update parent state? */}
        <TodoForm newTodo={this.newTodo} clearCompleted={this.clearCompleted}/>
        <TodoList todoData={this.state.todoData} setCompleted={this.setCompleted}/>
      </div>
    );
  }
}

export default App;
