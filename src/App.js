import React from 'react';
import CharacterList from './components/TodoComponents/TodoList';
import CharacterForm from './components/TodoComponents/TodoForm';

// class App extends React.Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
//   constructor(props) {
//     super(props);
//     this.state = {
//       myList: ' ',
//       inputText: ''
//     }
//   }



//   render() {
//     console.log(this.state.myList)
//     return (
//       <div>
//         <h2>Welcome to your Todo App!</h2>
//         <TodoForm />
//       </div>
//     );
//   }
// }

const myToDoListData = [
  { myToDo: 'Learn React' },
  { myToDo: 'Get job' }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: myToDoListData,
      inputText: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("event.target.name", event.target.name);
  };

  addCharacter = ev => {
    console.log('button clicked');
    ev.preventDefault();
    // create a new array with:
    // 1 - all the old data in the old array (Hint: use the spread operator)
    // 2 - the new character from this.state.inputText
    this.setState({
      characters: [
        ...this.state.characters,
        { myToDo: this.state.inputText }
      ],
      inputText: ''
    });
  };

  render() {
    return (
      <div className="App">
        <CharacterList characters={this.state.characters} />
        <CharacterForm
          addCharacter={this.addCharacter}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

export default App;
