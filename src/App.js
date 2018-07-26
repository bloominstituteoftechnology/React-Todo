import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
// import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      arr: [], 
      todo: ''
    };
  }

  addTodo = (event) => {
    event.preventDefault();
    const todo = this.state.arr.slice();
    todo.push({task:this.state.todo, id:Date.now(), completed:false});
    this.setState({arr:todo, todo:''});

    // localStorage.setItem(`${todo.id}`, JSON.stringify(todo));
  }

  clearCompleted = () => {
    let toDoArray = this.state.arr.filter(todo => {
      return !todo.completed;
    });
    this.setState({arr: toDoArray});
    console.log(toDoArray);

    // this.state.arr.filter(todo => {
    //   return todo.completed
    // }).map(item => localStorage.removeItem(item.id))
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  toggleCompleted = (event, id, completed) => {
    // console.log('target', event.target);
    event.target.style.textDecoration = !completed ? "line-through" : "none" ;

    let modifiedArr = this.state.arr.map(item => {
      if (id === item.id) {
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }
    });
    this.setState({arr: modifiedArr});
  }

  render() {
    // let localItems = [];
    // let keys = Object.keys(localStorage);
    // let i = keys.length;
    // while (i--) {
    //   localItems.push(JSON.parse(localStorage.getItem(keys[i])))
    // }
    // localItems = [].concat.apply([], localItems);
    // console.log(localItems, typeof localItems);
    
    return (
      <div className="container">
      <div className="content">
        <TodoForm handleInput={this.handleInputChange} add={this.addTodo} clear={this.clearCompleted} value={this.state.todo} />
        {/* {localItems.map(item => {
                return <Todo task={item.task} key={item.id} toggleCompleted={this.toggleCompleted} id={item.id} completed={item.completed} />
            })} */}
        <TodoList arr={this.state.arr} toggle={this.toggleCompleted} />
      </div>
      </div>
    );
  }
}

export default App;
