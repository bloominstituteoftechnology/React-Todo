import React from 'react';


class App extends React.Component {
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
      text: event.target.value,
    });

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
          <div key={item.id}>

            
          </div>

        ))
        
        
        }


        </div>
          <input onClick={this.AddTodo}  />
          <button onChange={this.handleChange} >Add Todo</button>
          <button>Clear All</button>
          
        </div>
      );
    }
  }
export default  App
