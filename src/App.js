import React from 'react';
import TodoList from './components/TodoComponents/TodoList' ;
import TodoForm from './components/TodoComponents/TodoForm' ;




class App extends React.Component {
  constructor() {
    super() ;
    this.state = {
      ogArr: [
        {
          name: 'Tristan',
          id: 1,
          completed: false
        },
        {
          name: 'Sophia',
          id: 2,
          completed: false
        },
      ],
      newArr: ''
    }
  }
  addTodoTask = e => {
    e.preventDefault();
    const tempStateArrCopy = this.state.ogArr.slice() ;
    tempStateArrCopy.push({ task: this.state.newArr, completed: false, id: Date.now() });
    console.log('UPDATING STATE!! from addTodoTaks') ;
    this.setState({ ogArr: tempStateArrCopy, newArr: ''}) ;
  } ;

  changeTodo = event => { 
    console.log('hey' + event.target.value);   
    console.log('UPDATING STATE!! from changeTodo') ;
    this.setState({ newArr: event.target.propNewArr}) ;
  }  

  render() {
    console.log("React Render Called!");
    return(            
      <div>
        <div><h1>Todo List: MVP</h1></div>

        {/* PASSING STATE TO PROPS VIA A VARIABLE, VAR DECALRED HERE */}
        {/* <TodoList myPropsData={this.state.ogArr} /> */}
        
        <TodoList myPropsData={this.state} />


        <TodoForm
          value = {this.state.newArr}
          propChangeTodo = {this.state.changeTodo}
          propAddTodoTask = {this.state.addTodoTask}
        />

      </div>
    )
  }
}
export default App ;
          {/*propNewArr = {this.state.newArr}*/}


