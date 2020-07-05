import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
    };

    // this.addItem = this.addItem.bind(this)
  }

  // addItem(e){
  //   if(this.target.value !== ""){
  //     var newItem ={
  //       text: this.target.value,
  //       key: Date.now()
  //     }

  //     //prevState gives a value of state obj just before the particular moment in time has happened
  //     this.setState((prevState) => {
  //       return {
  //         items: prevState.items.concat(newItem)
  //       }
  //     })
  //   }
  // //clears out the input
  //   this.target.value = ""

  //   console.log(this.state.items)

  //   e.preventDefault()
  // }

  render() {
    return (
      <div>
        {/* <TodoList propsTodoList={this.state.task}/>
        <TodoForm propsAddItem={this.addItem}/> */}
        <TodoForm addTodoFn={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      // console.log("Has todos", todos);
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log("No todos");
    }
  };

  //function that setState to the most recent todo
  addTodo = async (todo) =>
    // console.log(todo)
    {
      //Async + await: since this is asynchronus await will wait for this line to execute
      await this.setState({
        todos: [...this.state.todos, { text: todo, completed: false }],
      });
      //when it is done it will save all the todos into the local storage
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
      console.log(localStorage.getItem("todos"));
    };
}

//to delete local storage in Chrome: Inspect/Application/LocalStorage/ClearStorage/ClearSiteData

export default App;
