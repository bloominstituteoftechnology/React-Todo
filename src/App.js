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
          task: 'Learn setState()',
          id: 1,
          completed: false
        },
        {
          task: 'Style my To-Do list',
          id: 2,
          completed: false
        }
      ],
    }
  }
  // function handleInput(event){
  //   this.setState({
  //     placeholder: "... to-do"
  //   });
  // }

  // handleInput = event => {
  //   console.log(event.target.value);
  //   this.setState({
  //     text: event.target.value
  //   });
  // };

  handleInput = event => {
    if (event.key === 'Enter'){
      let newArr = this.state.tasks;
      // console.log(this.state.tasks.length);
      newArr.push({task: event.target.value, id: this.state.tasks.length + 1, completed: false});
      // console.log(newArr);
      this.setState({
        tasks: newArr
      });
      event.target.value = '';
    } 
    // else {
      // let newArr = this.state.tasks;
      // newArr.push({task: todoButton.target.value, id: this.state.tasks.length + 1, completed: false});
    // }
  };

  handleClick = () => {
    if (document.querySelector('input').value !== ''){
      let newArr = this.state.tasks;
      newArr.push({task: (document.querySelector('input')).value, id: this.state.tasks.length + 1, completed: false});
      this.setState({
        tasks: newArr
      });
      (document.querySelector('input')).value = '';
      // console.log(newArr);
    }
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <div>{this.state.tasks.map(function(task){
          return (
            <div className = 'tasks-list' key = {task.id}>
              {task.task}
            </div>
          );
        })}
        </div>
        {/* <div>{this.state.text}</div> */}
        <input placeholder = {this.state.placeholder} onKeyPress = {this.handleInput} />
        <button onClick = {this.handleClick}>Add Todo</button>
        <button>Clear Completed</button>
      </div>
    );
  }
};


export default App;
