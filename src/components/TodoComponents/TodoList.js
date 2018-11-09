import React from 'react';
import './Todo.css';
import Character from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// import React from 'react';

// const TodoList = props => this.state.myList.map(i => <li>{i}</li>);

// const TodoList = props => (
//     { myList: 'Learn React' },
//     { myList: 'Get job' }
// )

const turnRed = {
  textDecoration: "line-through"
}

const CharacterList = props => {
  console.log("this is props", props)
  // let strikethrough = this.state.completed ? "iDone" : "iNotDone";
    return (
      // <div style={`standard ${this.state.completed ? turnRed : null}`}>
      // <div className={`regular ${props.strikethrough}`} >
      /* // <div style={turnRed}>
      // <div> */
      <div className={'test'}>
        {props.currentList.map(characterInMap => (
          <Character
            key={characterInMap.task}
            characterOnProps={characterInMap}
            makeChange={props.makeChange}
          />
        ))}
      </div>
    );
  };
  
  export default CharacterList;

// export default TodoList