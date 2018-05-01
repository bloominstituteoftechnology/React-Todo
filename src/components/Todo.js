// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import CharsList from "./CharsList";

class App extends Component {
    // declare your `class`
    constructor() {
      // build out your `constructor`
      super();
      this.state = {
        // state is the data that our component will work with.
        title: "Welcome to Hogwarts",
        char: "",
        someVal: "",
        chars: []
      };
    }
  
    // lets build input that will allow us to type a new harry potter char
    // then a button, that will add that char into our chars array
    handleNameChange = event => {
      // a controlled input
      this.setState({ [event.target.name]: event.target.value });
    }; // I DID THIS - Because... REUSABILITY
  
    handleSubmitChar = () => {
      // take this.state.char add it to an array
      // this.setState() to replace the old array
      const chars = this.state.chars;
      const char = { name: this.state.char, id: this.state.char + chars.length };
      chars.push(char);
      this.setState({ chars: chars, char: "" });
    };
  
    render() {
      // `render` out some JSX
      console.log("Render was called");
      return (
        <div>
          <h1>{this.state.title}</h1>
          {/* 
            take the chars data from state, 
            loop over that data, 
            for each item in chars array, return a dom element 
          */}
          <CharsList chars={this.state.chars} />
          <input
            name="char" // should be known as the state.value of the thing we update
            onChange={this.handleNameChange}
            value={this.state.char} // should be bound to the state.value of thing we update
            placeholder="add student to hogwarts"
          />
          <button onClick={this.handleSubmitChar}>Add Char</button>
        </div>
      );
    }
  }
  
  export default App;
  
  // replace li with CharsList // DON'T FORGET TO PASS DOWN YOUR DATA CharsList
  // fix CharsList to consume props data
  