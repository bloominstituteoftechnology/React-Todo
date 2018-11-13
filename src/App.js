import React from 'react';

function generateTaskObj(prevState){
  return {
    task: prevState.inputText,
    status: false,
    id: prevState.count
  } 
}

class App extends React.Component {
  constructor(props) {
    super(props);
    //this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {
      toDoList: [],//[{task: "test1", completed: false, id: 0}],
      count: 1,
      inputText: ''
    };
  } 

  appendToDo = () => {
    if (this.state.inputText==='') {
      return;
    }

    this.setState({
      toDoList: [...this.state.toDoList, generateTaskObj(this.state)],
      count: this.state.count+1,
      inputText: ''
    });
  }

  clearCompleted = () => {
    this.setState({
      toDoList: this.state.toDoList.filter(item => !item.status)
    });
  }
  //filter out items compelted = set to true
  

  updateCurrentTodo = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  changeStatus = id => {
    console.log(id);
    this.setState({
      toDoList: this.state.toDoList.map((item) => {
        if (item.id === id) {
          item.status = !item.status;
        }
        return item;
      }),
    });
  }


  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    //console.log(this.state.toDoList);
    var self = this;
    return (
      <div className="App">
        <h2>To Do List: MVP</h2>
        {this.state.toDoList.map(item => {
          return(<div key={item.id} onClick={() => self.changeStatus(item.id)} className={item.status && "strikethrough"}>{item.task}</div>);
        })}
        <input type="text" name="toDo" placeholder="...to do" value={this.state.inputText} onChange={this.updateCurrentTodo}></input>
        <button onClick={this.appendToDo}>Add To Do</button>
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;

//return(<div>{item.name}</div>);