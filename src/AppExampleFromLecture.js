import React from 'react';

const myArr = [
  {
    id: 1,
    task: "Chilean flamingo",
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
      <h4>Name: {task}</h4>
      <h4>Species: {species}</h4>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
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
    console.log(event.target.value);
    // update the message field on state.
  };

  render() {
    console.log("STATE: ", this.state);
    return (
      <div>
        {/*<MessageRenderer propsMessage={this.state.message} />*/}
        {this.state.message !== "" ? <div>{this.state.message}</div> : null}
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

export default App;
