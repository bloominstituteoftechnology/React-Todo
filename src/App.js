import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      text: '',
      placeholder: '... to-do',
      tasks: [
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
      ]
    }
  }
  // function handleInput(event){
  //   this.setState({
  //     placeholder: "... to-do"
  //   });
  // }
  handleInput = event => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <div>{this.state.text}</div>
        <input placeholder = {this.state.placeholder} onChange = {this.handleInput} />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </div>
    );
  }
}



export default App;
