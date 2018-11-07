import React from 'react';

import Character from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// import React from 'react';

// const TodoList = props => this.state.myList.map(i => <li>{i}</li>);

// const TodoList = props => (
//     { myList: 'Learn React' },
//     { myList: 'Get job' }
// )


const CharacterList = props => {
    return (
      <div>
        {props.characters.map(characterInMap => (
          <Character
            key={characterInMap.myToDo}
            characterOnProps={characterInMap}
          />
        ))}
      </div>
    );
  };
  
  export default CharacterList;

// export default TodoList