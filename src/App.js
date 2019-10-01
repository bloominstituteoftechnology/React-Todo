import React from 'react';

const jerseyShore = [
	{
    task: 'Go to gym',
	  id: Date.now(),
    completed: false
	},

	{
    task: "Tan",
	  id:Date.now(),
	  completed: false
	},
	
	{
    task:' Laundry',
    id:Date.now(),
    completed: false
  },
  
  {
    task: 'Find GDTF',
    id:Date.now(),
    completed: false
  },

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state ={
      task: jerseyShore
    };
  }
  // toggleItem = id => {
  //   console.log('this is in toggleItem');
  //   this.setState({
      
  //     id: this.state.id.map(item => {
  //       console.log('this is item', item)
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           completed: !item.completed
  //         };

  //       } else{
  //         return item;
  //       }
  //     })
  //   });
  // };
  
  render() {
    return (
      
      <div>
        <h2>{this.state.task} Welcome to your Todo App!</h2>
        <div className='mainBox'>
          
        </div>
      </div>
    );
  }
}

export default App;
