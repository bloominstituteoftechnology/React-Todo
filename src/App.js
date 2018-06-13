import React from 'react';

class App extends React.Component {
  constructor() {
     // step 2. call your `constructor`
     super();
     this.state = {
       todo1: {
         task: ["Walk the dog"],
         completed: [false]
       },
       todo2: {
         task: ["Wash the dog"],
         completed: [false]
       }
     };
     // state is the memory we have in our component,
     // props is the mechanism for passing that state around.
     this.renderItem = "";
    for (var key in this.state) {
     this.renderItem += this.state[key].task + " </br>";
     }
     console.log(this.renderItem)
   }
   render(){
     return(
       <div>
          {this.renderItem}
       </div>
     )
   }
}
export default App;
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
