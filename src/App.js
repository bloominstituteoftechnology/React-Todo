import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



const todoData = [
  {
    task: 'example',
    id: 999,
    completed: false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(){
      super();
      this.state = {
        todoData: todoData
        //give state to data
      }
    };

    toggleItem =  (clickedId) => {
      const newTodo = this.state.todoData.map((item) => {
       if (item.id === clickedId){
         return {
           ...item,
           completed: !item.completed
         };
       } else {
         return item;
       }
      })

      this.setState({
        todoData: newTodo
      })
    };

    addNewTask = itemTask => {
      const newTask = {
        task:itemTask,
        id: Date.now(),
        completed:false
      };
      this.setState({
        todoData: [...this.state.todoData, newTask]
      });
    };

  render() {
    return (
      <div>
        <div className='searchHeader'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewTask={this.addNewTask} />
        </div>
        <TodoList todoData={this.state.todoData} toggleItem={this.toggleItem}/>
      </div>
    );
  }
}

export default App;
