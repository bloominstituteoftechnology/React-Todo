import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
// import CharacterForm from './components/TodoComponents/TodoForm';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';
import { removeDotSegments } from 'uri-js';
import './components/TodoComponents/Todo.css'
import { networkFirst } from 'sw-toolbox';

// const turnRed = {
//   textDecoration: "line-through"
// }

// // const myToDoListData = [
// //   { 
// //     myToDo: 'Learn React',  
// //     ID: 12343293432,
// //     completed: false
// //   },
// //   { 
// //     myToDo: 'Get job',
// //     ID: 123432933232,
// //     completed: true }
// // ];

// class App extends React.Component {
//   constructor() {
//     super();
//     // this.state = {
//     //   task: myToDoListData,
//     //   inputText: ''
//     // };
//     this.state = {
//       currentList: [
//         {
//           task: "Organize Garage",
//           id: 1528817077286,
//           completed: false
//         },
//         {
//           task: "Bake Cookies",
//           id: 1528817084358,
//           completed: true
//         }
//       ],
//       inputText: ""
//     };
//   }

//   handleChange = event => {
//     console.log('etn', event.target.name)
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//     console.log("event.target.name", event.target.name);
//   };

//   addCharacter = ev => {
//     console.log('button clicked');
//     ev.preventDefault();
//     // create a new array with:
//     // 1 - all the old data in the old array (Hint: use the spread operator)
//     // 2 - the new character from this.state.inputText
//     this.setState({
//       currentList: [
//         ...this.state.currentList,
//         { 
//           task: this.state.inputText,
//           ID: Date.now(),
//           completed: false
//         }
//       ],
//       inputText: ''
//     });
//   };

//   clearCharacters = ev => {
//     ev.preventDefault();
//     alert('clearing')
//     this.setState({
//       currentList: [
//         {
//           task: "Organize Garage",
//           id: 1528817077286,
//           completed: false
//         },
//         {
//           task: "Bake Cookies",
//           id: 1528817084358,
//           completed: true
//         }
//       ]
//     })
//     // this.setState({
//     //   task: this.state.task.filter(
//     //     task => task.completed === false
//     //     )
//     // })
//   }

//   makeChange = (charProps) => {
//     // console.log('event and char', event, character)
//     // console.log("my event in make change", ev.target)
//     // alert('wheyyyy')
//     console.log(charProps)
//     // console.log("character is...", character)
//     let newArray = this.state.currentList.slice()
//     // console.log("state data has been sliced", newArray)
//     newArray = newArray.map(character => {
//       // console.log("under newArray before if", character)
//       if (character.id === charProps.id) { 
//         console.log("after char ID", character)
//         character.completed = !character.completed;
//         // console.log('character after if', character)
//         return character
//       }
//       else {
//         // character.completed = false;
//         return character
//       }
//       // return character
//     })
//     // console.log("After IF statement", newArray)
//     this.setState({
//       currentList: newArray
//     })
    
//     // console.log('most recent log', this.state.currentList[0])
//     // console.log("ev.target.style = ", event.target)
//   }

//   render() {
//     // let doneOrNot = (this.state.completed) ? "strikethrough-style" : "regular";
//     // console.log("this.state.currentList is...", this.state.currentList)
//     // console.log('this.state.task = ', this.state.task)
//     // console.log("this.state.completed is...", myToDoListData[completed])
//     return (
//       <div className="App">
//         <CharacterList 
//         currentList={this.state.currentList} 
        
//         // strikethrough='strikethrough-style'
//         // strikethrough={this.state.completed ? "strikethrough-style" : "regular"}
//         // strikethrough={doneOrNot}
//         makeChange={this.makeChange}
//         />
//         {/* <Character /> */}
//         <CharacterForm
//           addCharacter={this.addCharacter}
//           inputText={this.state.inputText}
//           handleChange={this.handleChange}
//           clearCharacters={this.clearCharacters}
//         />
//       </div>
//     );
//   }
// }

// export default App;

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

// -----------

// const disneyData = [
//   { characterName: "Mickey Mouse", color: "green", id: 0 },
//   { characterName: "Minnie Mouse", color: "green", id: 1 },
//   { characterName: "Donald Duck", color: "green", id: 2 },
//   { characterName: "Goofy", color: "green", id: 3 },
//   { characterName: "Pluto", color: "green", id: 4 }
// ];

// let nextId = 4; 

// const getNewId = () => {
//   nextId += 1;
//   return nextId;
// };

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       characters: disneyData,
//       inputText: ""
//     }
//   }

//   handleChange = event => {
//     this.setState({
//       // [event.target.name]: event.target.value # If we had two input field, the brackets would select the state with that input name and then update it according to the value. As we only have one here, we can just use inputText
//       inputText: event.target.value
//     })
//   }

//   addCharacter = ev => {
//     ev.preventDefault();
//     console.log('add char =', this.state.inputText)
//     this.setState({
//       // slice creates a new array with all of the old data
//       // characters: this.state.characters.slice 
//       characters: [...this.state.characters, 
//         {characterName: this.state.inputText, 
//           color: "green", 
//         id: getNewId()}],
//         inputText: ''
//     })
//   }

//   changeColor = id => {
//     this.setState({
//       characters: this.state.characters.map(character => {
//         if (character.id === id) {
//         return {...character, 
//           color: character.color==='green' ? 'red' :
//         'green'};
//       } else {
//         return character;
//       }
//       })
//     })
//   }

//   clearReds = ev => {
//     ev.preventDefault();
//     this.setState({
//       characters: this.state.characters.filter(
//         character => character.color === "green")
//     })
//   }

//   increment = ev => {
//     ev.preventDefault();
//     this.setState(prevState => ({number: prevState.number + 1}))
//   }

//   render() {
//     console.log(this.state.characters)
//     return (
//       <div className="App">
//         <TodoList 
//         characterList={this.state.characters}
//         changeColor={this.changeColor}/>
//         <CharacterForm 
//         clearReds={this.clearReds}
//         addCharacter={this.addCharacter}
//         inputText={this.state.inputText} 
//         handleChange={this.handleChange}
//         increment={this.increment} />
//       </div>
//     );
//   }
// }


const myData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: myData,
      inputText: ''
    }
  }

  changeComplete = id => {
    this.setState({
      data: this.state.data.map(singleChar => {
        if (singleChar.id === id) {
          console.log('single char', singleChar.completed)
          return {...singleChar, 
            completed: singleChar.completed=== true ? false :
            true};
        } else {
          return singleChar;
        }
      })
    })
  }


  handleChange = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      data: [...this.state.data,
      {task: this.state.inputText,
      completed: false,
      id: Date.now()}],
      inputText: ''
    })
  }

  clearComplete = event => {
    event.preventDefault();
    this.setState({
      data: this.state.data.filter(
        e => e.completed === false)
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <TodoList 
          data={this.state.data}
          changeComplete={this.changeComplete}
        />
        <TodoForm 
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
          clearComplete={this.clearComplete}
        />
      </div>
    )
  }

}


export default App