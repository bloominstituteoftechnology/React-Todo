import React from 'react';
import CharacterList from './components/TodoComponents/TodoList';
import CharacterForm from './components/TodoComponents/TodoForm';
import Character from './components/TodoComponents/Todo';
import { removeDotSegments } from 'uri-js';
import './components/TodoComponents/Todo.css'
import { networkFirst } from 'sw-toolbox';

const turnRed = {
  textDecoration: "line-through"
}

// const myToDoListData = [
//   { 
//     myToDo: 'Learn React',  
//     ID: 12343293432,
//     completed: false
//   },
//   { 
//     myToDo: 'Get job',
//     ID: 123432933232,
//     completed: true }
// ];

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   task: myToDoListData,
    //   inputText: ''
    // };
    this.state = {
      currentList: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: true
        }
      ],
      inputText: ""
    };
  }

  handleChange = event => {
    console.log('etn', event.target.name)
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
      currentList: [
        ...this.state.currentList,
        { 
          task: this.state.inputText,
          ID: Date.now(),
          completed: false
        }
      ],
      inputText: ''
    });
  };

  clearCharacters = ev => {
    ev.preventDefault();
    alert('clearing')
    this.setState({
      currentList: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: true
        }
      ]
    })
    // this.setState({
    //   task: this.state.task.filter(
    //     task => task.completed === false
    //     )
    // })
  }

  makeChange = (charProps) => {
    // console.log('event and char', event, character)
    // console.log("my event in make change", ev.target)
    // alert('wheyyyy')
    console.log(charProps)
    // console.log("character is...", character)
    let newArray = this.state.currentList.slice()
    // console.log("state data has been sliced", newArray)
    newArray = newArray.map(character => {
      // console.log("under newArray before if", character)
      if (character.id === charProps.id) { 
        console.log("after char ID", character)
        character.completed = !character.completed;
        // console.log('character after if', character)
        return character
      }
      else {
        // character.completed = false;
        return character
      }
      // return character
    })
    // console.log("After IF statement", newArray)
    this.setState({
      currentList: newArray
    })
    
    // console.log('most recent log', this.state.currentList[0])
    // console.log("ev.target.style = ", event.target)
  }

  render() {
    // let doneOrNot = (this.state.completed) ? "strikethrough-style" : "regular";
    // console.log("this.state.currentList is...", this.state.currentList)
    // console.log('this.state.task = ', this.state.task)
    // console.log("this.state.completed is...", myToDoListData[completed])
    return (
      <div className="App">
        <CharacterList 
        currentList={this.state.currentList} 
        
        // strikethrough='strikethrough-style'
        // strikethrough={this.state.completed ? "strikethrough-style" : "regular"}
        // strikethrough={doneOrNot}
        makeChange={this.makeChange}
        />
        {/* <Character /> */}
        <CharacterForm
          addCharacter={this.addCharacter}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          clearCharacters={this.clearCharacters}
        />
      </div>
    );
  }
}

export default App;

// const textAreaStyles = {
//   width: 235,
//   margin: 5
// };

// const makeRed = {
//   color: "red"
// }

// const strikethrough = {
//   textDecoration: "lineThrough"
// }

// class MyToDoList extends React.Component {
//   constructor(props) {
//     super(props);
//     // change code below this line
//     this.state = {
//       userInput: "",
//       toDoList: []
//     }
//     // change code above this line
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.makeChange = this.makeChange.bind(this);
//   }
//   handleSubmit() {
//     const itemsArray = this.state.userInput.split(',');
//     this.setState ({
//       toDoList: itemsArray
//     });
//   }
//   handleChange(e) {
//     this.setState({
//       userInput: e.target.value
//     });
//   }

//   makeChange() {
//     alert('heyyyy')
//   }

//   render() {
//     const items = this.state.toDoList.map(i => <li>{i}</li>); // change code here
//     return (
//       <div>
//         <textarea
//           onChange={this.handleChange}
//           value={this.state.userInput}
//           style={textAreaStyles}
//           placeholder="Separate Items With Commas" /><br />
//         <button onClick={this.handleSubmit}>Create List</button>
//         <h1>My "To Do" List:</h1>
//         {/* <ul className={()}> */}
//         <ul>
//           {items}
//         </ul>
//       </div>
//     );
//   }
// };

// export default MyToDoList