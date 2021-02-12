import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import styled from 'styled-components';
import './App.css'

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

const initialTodo = [];

class App extends React.Component {
    constructor () {
        super ();
        this.state = {
            todo: initialTodo,          //todo is the list of tasks that have been added
        }  
    }

    toggleCompleted = (todoId) => {
        // iterate through the todo array (this.state.todo) to toggle only the todo in question
        const newTodo = this.state.todo.map(todo => {
          if (todoId === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          else { return todo;}
        })
        // update "todo" state value to this new array
        this.setState({
          ...this.state,
          todo: newTodo
        })
      }

    addTodo = (taskName) => {    
        const newTask={
            task: taskName,
            id: Date.now(),
            completed: false
        }
        
        this.setState({
            ...this.state, todo: [...this.state.todo, newTask]
        })  
    }

      clearCompleted = () => {
        console.log('clearing purchased items');
        // if todo.completed is true, then filter it out of the this.state.todo array
        this.setState({
          ...this.state,
          todo: this.state.todo.filter(todo => !todo.completed)
        })
      }

    render() {
        return (
            <div className="App">
                <AppDiv>
                    <div className="header">
                        <h1>My To-do List!</h1>
                        <TodoForm addTodo={this.addTodo} />
                    </div>
                    <TodoList 
                        todo={this.state.todo} 
                        clearCompleted={this.clearCompleted} 
                        toggleCompleted={this.toggleCompleted}
                    />
                </AppDiv>
            </div>
        
        );
    }
}

const AppDiv = styled.div`
    font-family:Courier New;
    display: flex;
    flex-direction: column;
    align-items:center;
    background: rgba(255, 255, 240, .9);
    opacity: .85;
    height: 100vh;
    background-size: cover;
    border: 20px solid rgb(253, 253, 107);
    

    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top:4vh;
    }

    h1 {
        color: rgb(0, 0, 85);
        font-size: 3rem;
        text-shadow: 1px 1px 1px red;
    }
 
`

export default App;
