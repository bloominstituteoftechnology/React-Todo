import React from 'react';

// const TodoForm = props => <textarea placeholder="Enter stuff here"></textarea>

// const AddToDo = props => <button>Add stuff</button>

// const TodoForm = () => {
//     return (
//         <div>
//             <form onSubmit={props.addToDo} placeholder="Enter stuff here"></form>
//             <button>Add Todo</button>
//             <button>Clear Completed</button>
//         </div>
//     )
// }

// const TodoForm = props => {
//     return (
//       <div>
//         <form onSubmit={props.addCharacter}>
//           <input
//             type="text"
//             name="inputText"
//             placeholder="add new character"
//             value={props.inputText}
//             onChange={props.handleChange}
//           />
//           <input
//             type="text"
//             name="inputTextTwo"
//             placeholder="Just here for looks"
//             value={props.inputTextTwo}
//             onChange={props.handleChange}
//           />
//           <button type="submit">Add Character</button>
//         </form>
//       </div>
//     );
//   };

const CharacterForm = props => {
    return (
      <div>
        <form onSubmit={props.addCharacter}>
          <input
            type="text"
            name="inputText"
            placeholder="what to do.."
            value={props.inputText}
            onChange={props.handleChange}
          />
          <button type="submit">Add Character</button>
        </form>
        <form onSubmit={props.clearCharacters}>
            <button type="clear">Clear Completed</button>
        </form>
        
      </div>
    );
  };
  


export default CharacterForm