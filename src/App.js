import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
constructor(){
  super();
  this.state = {
    todos:[
      {
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
  }
  };

addHandler = event => {
  const items = this.state.todos.slice();
  let input = document.getElementById("Input").value;


    items.push(
    {
      task:input,
      id: Date.now(),
      completed:false
    }
  );
  this.setState({todos: items});
  document.getElementById("Input").value = null;
}

clear= event => {
  event.preventDefault();
  let todos= this.state.todos.slice();
  todos=todos.filter(todo => !todo.completed);
  this.setState({todos});
}

toggleComplete = (id) => {
  const todos = this.state.todos.slice();
  todos.map(todo => {
    if (todo.id === id ){
      todo.completed = !todo.completed;
      console.log(todo.completed);
      return (
        todo
      );
    } else {
      return (
        todo
      );
    }
  });
};

 render() {
    return (
      <div>
       <TodoList 
       handleToggleComplete={this.toggleComplete}
       list={this.state.todos}/>
       <TodoForm 
        add= {this.addHandler}
        clear={this.clear}
       
       />
      </div>
    );
  }
}

export default App;
