import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import styled from 'styled-components';

const AppDiv = styled.div`
  margin-top: 10%;
  justify-content: center;

`;

const InputForm = styled.div`
  border-radius: 5%;
  margin-right: 1%;
  justify-content: center;
  padding: 2%;
`;

const MainList = styled.div`
justify-content: center;
  margin-top: 2%;
  border-radius: 5%;
`;

const data = [
  {
    task: 'Organize Laundry Room',
    id: 152788959,
    completed: false,
    
  },


  {
    task: 'Replace antifreeze in Jaguar',
    id: 147258369,
    completed: false
  },

  {
  task: 'Replace antifreeze in Escalade',
  id: 147258379,
  completed: false
  },

  {
    task: 'Charli to the Groomer',
    id: 147258389,
    completed: false
  },

  {
    task: 'Fix corner guttering at Aunt Eleanors',
    id: 147258399,
    completed: false
  },

  {
    task: 'Groceries',
    id: 147258409,
    completed: false
  },
] 

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  
  class App extends Component {
    constructor () {
      super ();
      this.state = {
        name: 'My' ,
        data: data
      };
    };

    addTask = taskContent => {
      const newTask = {
        task: taskContent,
        id: Date.now(),
        completed: false
      }
      this.setState({
        data: [...this.state.data, newTask]
      })
    };
  
    clearCompleted = () => {
      console.log('clear list')
      this.setState({
        data: this.state.data.filter(task => !task.completed)
      })
    };
  
   toggleTask = id => {
     console.log('task is toggled')
     this.setState({
       data: this.state.data.map(task => {
         if (task.id === id) {
           return{
             task: task.task,
             id: task.id,
             completed: !task.completed
           };
         } else {
           return task
         }
       })
     })
   };
  
    render() {
      return (
        <AppDiv className='app-div'> 
    <h1>{this.state.name}{" "}Never{" "}Ending{" "}{" "}ToDo{" "}{" "}{" "}List!</h1>
          <InputForm className='input-form'>
            <TodoForm  addTask={this.addTask} />
          </InputForm>
          <MainList className ='main-list'>
            <TodoList data={this.state.data} toggleTask={this.toggleTask} clearCompleted={this.clearCompleted} />
          </MainList>
        </AppDiv>
      );
    }
  }
  

export default App;