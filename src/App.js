import React from 'react';

const ItemMaker = x => {
 return  <p>{x.message}</p>
}

const newArr = [
  {
    task: "default",
    id: 0,
    completed: false
  }
];

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      message: "hello from state"
    }
  };

  addItem = () => {
    newArr.push(
      {
        task: "newTask",
        id: 0,
        complete: false
      }
    )
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  updateStatus = () => {
    this.setState({task: "heyyyyyo"});
  }

  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        {/* {newArr[0].task} */}
        {/* <ItemMaker props={newArr[0]}/>
        {newArr.forEach(function(x){
          console.log(x.task);
          <ItemMaker props={x.task} />
        })} */}
        {newArr.map( x => <ItemMaker props={x} />)}
        {/* {newArr.forEach(<ItemMaker props={this.task}/>)} */}
        <ItemMaker x={this.state} />

        <input onClick={this.updateStatus} placeholder="New Task" />
        <button onClick={this.addItem}>Add task</button>
      </div>
    );
  }
}

export default App;
