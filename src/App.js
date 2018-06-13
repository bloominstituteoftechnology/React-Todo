import React from 'react';

function TodoElement(prop){
  return <div> {prop.item} </div>
}
class App extends React.Component {
  render() {
    return (
      <div>
        <TodoElement item="Walk the dog" />
        <input type="text" placeholder="Add item"/>
      </div>
  );
  }
}
export default App;
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
