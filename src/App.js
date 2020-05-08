import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const todo = [

  {

      task: "study",
      id: 1,
      completed: false


  },

  {

      task: "work",
      id: 2,
      completed: false

  },

  {

      task: "review",
      id: 3,
      completed: false

  }

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {

      todo
    };
  }

  toggleToDo = todoID => {

    this.setState({


      todo: this.state.todo.map(list => {

        if(todoID === list.id){

          return {

              ...list,
              completed: !list.completed

          };
        }

        return list;

      })
    });
  };
  
  addNewList = listName => {

    this.setState({
        todo: [
      ...this.state.todo,
      { task: listName, completed: false, id: Date.now() }
        ]
    });
  };

  clearCompleted = () => {

    this.setState({

      todo: this.state.todo.filter(list => {

       return !list.completed;
      })
      });
    };

  

  render() {
    return (
      <div>
        <nav>
        <h2>To Do List</h2>
        <TodoForm addNewList={this.addNewList} />
        </nav>
        <TodoList
        toggleToDo={this.toggleToDo}
        todo={this.state.todo}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
