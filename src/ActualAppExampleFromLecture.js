import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const myArr = [
  {
    id: 1,
    common_name: "Chilean flamingo",
    species: "Phoenicopterus chilensis"
  }
];

// CCR - "Class", "Constructor", "Render"

const MessageRenderer = props => {
  return <h1>{props.propsMessage}</h1>;
};

const Animal = props => {
  const { common_name, species } = props.animalProp;
  return (
    <div>
      <h4>Name: {common_name}</h4>
      <h4>Species: {species}</h4>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello",
      animals: myArr
    };
  }

  handleUpdateState = () => {
    const animals = this.state.animals.slice();
    // clone our state animals array.
    animals.push({
      id: 4,
      common_name: "Australian brush turkey",
      species: "Alectura lathami"
    });
    // push our new animal item into the animals array.
    this.setState({ animals: animals });
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
        {/*<MessageRenderer propsMessage={this.state.message} />*/}
        <div>Hello: {this.state.message}</div>
        {this.state.animals.map(animal => <Animal animalProp={animal} />)}
        <button onClick={this.handleUpdateState}>Click to Add Animal</button>
        {/*All events in React go through what's called the Synthetic Event*/}
        {/*Events are tied to user interaction with our code*/}
        <button onDoubleClick={this.handleUpdateState}>Click to Double</button>
        <input placeholder="capture" onChange={this.handleInputChange} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
