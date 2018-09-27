import React from 'react';
// import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      text: 'whoop',
      todos: [{
        id: Date.now(),
        task: '',
        completed: false
        
      }]
    }
  }

  handleChange = event => {
    this.setState({
      todos: event.target.value
    })
  }

  AddTodo = event => {
    this.setState({
// arr: state.arr.push(event.target.value)
    })
  }

  handleClick = event => {
      alert("Clicked!")
  }

  
  render(){

    return(
      <div>

        <TodoList  todos={this.state.todos} handleClick={this.handleClick}




        />
      </div>
    )
    // return(
    //   <div>{this.state.text}
    //   Change Name :
    //   <input type='text' value={this.state.text} onChange={this.handleChange}
    //   />
    //   <button onClick={this.AddTodo} >Add Todo</button>
    //       <button>Clear All</button>
    //   </div>
    // )
  }
}


/*class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super() ;
    this.state = {
      arr: [
        {task: 1, completed: false}
      ]

    };
  }


  // Set up event handler, add setState.

  handleChange = event => {
    this.setState({
      arr: arr.push(event.target.value)
    })
  }

  AddTodo = event => {
    this.setState({
text: this.state.arr.push(event.target.value)
    })
  }
    render() {
      return (
        <div>
        <div>
        {this.state.arr.map(item =>(
          <div key={item.task}>

            
          </div>

        ))
        
        
        }


        </div>
          <input text={this.state.text}/>
          <button onChange={this.} >Add Todo</button>
          <button>Clear All</button>
          
        </div>
      );
    }
} */
export default  App
