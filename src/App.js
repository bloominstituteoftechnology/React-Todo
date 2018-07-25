import React from "react";

import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';

const myArr = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  }
];

// CCR - "Class", "Constructor", "Render"




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello",
      todoData: myArr
    };
  }

  handleUpdateState = () => {
    const todoData = this.state.todoData.slice();
    // clone our state todoData array.
    todoData.push({
      task: this.state.message,
      id: Date.now(),
      completed: false
    });
    // push our new task item into the todoData array.
    this.setState({ todoData: todoData });
    // FROM REACT API the ONLY way to change state.
  };

  handleInputChange = event => {
    // update the message field on state.
    this.setState({ message: event.target.value });
  };

  render() {
    console.log("STATE: ", this.state);
    return (
      <div>
        <TodoList propsMessage={this.state.message} />
        {this.state.todoData.map(task => <Todo todoDataProp={task} />)}
        <input placeholder="...todo" onChange={this.handleInputChange} />
        <button onClick={this.handleUpdateState}>Add Todo</button>
        {/*All events in React go through what's called the Synthetic Event*/}
        {/*Events are tied to user interaction with our code*/}
        <button onClick={this.handleUpdateState}>Clear Completed</button>
      </div>
    );
  }
}

export default App;

//// delete everything below here
// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// const myArr = [
//   {
//     id: 1,
//     common_name: "Chilean flamingo",
//     species: "Phoenicopterus chilensis"
//   }
// ];

// // CCR - "Class", "Constructor", "Render"

// const MessageRenderer = props => {
//   return <h1>{props.propsMessage}</h1>;
// };

// const Animal = props => {
//   const { common_name, species } = props.animalProp;
//   return (
//     <div>
//       <h4>Name: {common_name}</h4>
//       <h4>Species: {species}</h4>
//     </div>
//   );
// };

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       message: "Hello",
//       animals: myArr
//     };
//   }

//   handleUpdateState = () => {
//     const animals = this.state.animals.slice();
//     // clone our state animals array.
//     animals.push({
//       id: 4,
//       common_name: "Australian brush turkey",
//       species: "Alectura lathami"
//     });
//     // push our new animal item into the animals array.
//     this.setState({ animals: animals });
//     // FROM REACT API the ONLY way to change state.
//   };

//   handleInputChange = event => {
//     // update the message field on state.
//     this.setState({ message: event.target.value });
//   };

//   render() {
//     console.log("STATE: ", this.state);
//     return (
//       <div>
//         {/*<MessageRenderer propsMessage={this.state.message} />*/}
//         <div>Hello: {this.state.message}</div>
//         {this.state.animals.map(animal => <Animal animalProp={animal} />)}
//         <button onClick={this.handleUpdateState}>Click to Add Animal</button>
//         {/*All events in React go through what's called the Synthetic Event*/}
//         {/*Events are tied to user interaction with our code*/}
//         <button onDoubleClick={this.handleUpdateState}>Click to Double</button>
//         <input placeholder="capture" onChange={this.handleInputChange} />
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
