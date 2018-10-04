import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todoData: [
            
          ],
        todoText: ''
      };
    }
    completedItem =event =>{
      let id = parseInt(event.target.id);
      this.setState({
        todoData: this.state.todoData.map((item) => {

          if (id !== item.id) {
            return item;
          } else {
            if(item.completed===false){
              return {
                ...item,
                completed:true
              };
            }
            else if(item.completed===true){
              return{
                ...item,
                completed:false
              }
            }
          }
        })
      });
      
    }
    clearCompleted =event =>{
      event.preventDefault();
      const copyOfData= this.state.todoData
      this.setState({
        todoData: copyOfData.filter ((item) => item.completed===false)})
    }
    addNewTodo = event => {
        event.preventDefault();
        this.setState({
          todoData: [
            ...this.state.todoData,
            { task: this.state.todoText,
              id: Date.now(),
              completed: false
            }
          ],
          todoText: ''
        });
    };
    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    render() {
        return (
          <div className="App">
            <TodoList
              completedItem={this.completedItem}
              todoData={this.state.todoData}            
            />
            <TodoForm 
              addNewTodo={this.addNewTodo}
              changeHandler={this.changeHandler}
              todoText={this.state.todoText}
              newTodo={this.state.newTodo}
              clearCompleted={this.clearCompleted}
              
            />

          </div>
        );
    }
}

const rootElement = document.getElementById('root');
export default App
