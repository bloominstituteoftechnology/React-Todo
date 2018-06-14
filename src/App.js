import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList'; 

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
        task: '',
        id: '',
      

      todos: [{
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
    };
this.toggle = this.toggle.bind(this);
  
  }

handleChange = (event) => {
  console.log('event name', event.target.name);
  console.log('event value', event.target.value);
this.setState({ 
  task : event.target.value ,
  id: Date.now(),
  completed: false,
});
};

clearComplete = () => {
 let todolist = this.state.todos.slice();
 todolist = todolist.filter(item => 
   item.completed === false)
 this.setState({
   todos: todolist,
   task: '',
 })
};


toggle = (id) => {
 
let todos = this.state.todos.slice();
todos = todos.map(todo => {
  if (todo.id === id) {
    todo.completed = !todo.completed;
    return todo;
  } else {
    return todo;
  }
});

  this.setState({ todos });
}



addToDo = (event) => {

 let addToDo = this.state.todos.slice();
 console.log('previous list ', addToDo);
 addToDo.push({task: this.state.task, id: Date.now(), completed: false});
 this.setState({
   task: '',
   todos: addToDo,
 })
  console.log('new list ', addToDo);
}
  


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className = 'app-wrapper'>
        {/* render a todo form, and the todo list */}
       <TodoForm clearComplete = {this.clearComplete} addToDo = {this.addToDo} handleChange = {this.handleChange} />
       <TodoList   toggle={this.toggle} checked = {this.state.CheckboxChecked} todos = {this.state.todos} />

      </div>
    );
  }
}

export default App;
