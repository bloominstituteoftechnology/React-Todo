import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

const itemsData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Laundry',
    id: 1528817084121,
    completed: false
  }
]



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: itemsData,
    };
  }


  render() {
    return (
      <div>
        <TodoList itemsList={this.state.items}/>
      </div>
    );
  }
}

export default App;
