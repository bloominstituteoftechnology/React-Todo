import React from 'react';

const listArr = [
  {
    id:384729857,
    task: "finish this dang thing",
    completed: false,
  
  }
]

const List = props => {
  return (
    <div className = {props.complete}>
    <h2>{props.listprop.task}</h2>
    </div>
  );
}

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      dontknowyet: "hi"
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Todo List:</h1>
        {listArr.map(item => <List listprop={item}/>)}
      </div>
    );
  }
}



// const listInput = [
//   {
//     id: Date.now(),
//     task: {this.studhdfjgh},
//     completed: false,

//   }
// ]

export default App;
