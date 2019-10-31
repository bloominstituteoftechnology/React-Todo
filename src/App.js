import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import ChoreForm from './components/TodoComponents/TodoForm';


const data = [
  {
    name: "Walk Dog",
    id: 1,
    finished: false
  },
  {
    name: "Make Dinner",
    id: 2,
    finished: false
  },
  {
    name: "Take out trash",
    id: 3,
    finished: false
  },
  {
    name: "Shower",
    id: 4,
    finished: false
  },
  {
    name: "Study React Classes",
    id: 5,
    finished: false
  },
  {
    name: "Prep for upcoming meeting",
    id: 6,
    finished: false
  }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      chores: data
    }
    this.toggleFinished = this.toggleFinished.bind(this);
  }

  toggleFinished(choreId) {
    console.log('toggleFinished', choreId);

    this.setState({
      chores: this.state.chores.map(chore => {
        if(chore.id === choreId){
          return {
            ...chore,
            finished: !chore.finished
          };
        }
        return chore;
      })
    })
  }

  clearChore = () => {
    console.log('clearchore');
    this.setState({
      chores: this.state.chores.filter(chore => {
        return !chore.finished;
      })
    })
  }

  addChore = (choreName) => {
    console.log('addChore: ', choreName);
    this.setState({
      chores: [
        ...this.state.chores,
        {
          name: choreName,
          id: Date.now(),
          finished: false
        }
      ]
    })
  }

  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <ChoreForm addChore={this.addChore} />
        <TodoList 
         chores={this.state.chores}
         toggleFinished={this.toggleFinished}
         clearChore={this.clearChore}
        />
      </div>
    );
  }
}

export default App;
