import React from 'react';
import moment from 'moment';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Today's list of important things To Do!</h1>
        <date className='todaysDate'>{moment().format('MMM Do YYYY')}</date>
      </div>
    );
  }
}

export default App;
