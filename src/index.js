import React, {Component} from 'react';
import { render } from 'react-dom';
import AnimalsList from './App';

const styles = {
    fontFamily: "Helvetica",
    textAlign: "center"
  };
  
  class App extends Component {
    constructor() {
      super();
      this.state = {
        newAnimal: "",
        animals: [/*"groceries", "shopping", "homework", "study"*/]
      };
    }
  
    handleAddAnimal = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    handleSubmitAnimal = () => {
      const { animals } = this.state;
      animals.push(this.state.newAnimal);
      this.setState({ animals, newAnimal: "" });
    };
  
    render() {
      return (
        <div style={styles}>
          <h2>Todo List</h2>
          <AnimalsList {...this.state} />
          <input
            type="text"
            name="newAnimal"
            value={this.state.newAnimal}
            placeholder="add to list"
            onChange={this.handleAddAnimal}
          />
          <button onClick={this.handleSubmitAnimal}>Todo</button>
        </div>
      );
    }
  }

render(<App />, document.getElementById('root'));
