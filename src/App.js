import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './components/Todo.css'

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
        <TodoList updateTodoFn={this.updateTodo} todos={this.state.todos} />
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

    updateTodo = async (todo) => {
      const newTodos = this.state.todos.map(_todo => {
        if(todo === _todo)
        return{
          text: todo.text,
          completed: !todo.completed //this means it will return true or false depending if it is set to true or false
        }
        else
        return _todo
      })
      await this.setState({todos: newTodos})
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
}

//to delete local storage in Chrome: Inspect/Application/LocalStorage/ClearStorage/ClearSiteData

export default App;
