What is a Class Component - 

We extend Base class from the react library. 
Base class gives new functionality. 

Render is used to render() {
    return(
        <div>This is rendered using render</div>
    )
}

class components hold state just as functional components do. 
where state is managed using useState for functions..

import React, { useState } from 'react'

export default App() {

const [ data, setData ] = useState(initialState); // functional

return (
    <div>{data}</div>
 )
}


vs

Class App extends React.Component {

constructor() {  //class based constructor function
    super();     // invoke super function to initialize state. 
    this.state {   // all state data is handled in this state
        data: initialState;
        isLoading: false;
        newObject: []; //etc
    }
}

render() {
    return (
        <div>{this.state.data}</div>
    )
}

}

 is used in classes components.



 PASSING STATE AS PROPS

 using constructor functions passing state is similar to functional prop passing

 App.js
 const [data, setData] = useState(initialState)


 <Component data={data}/> // however you name it is how you pass it. 
 

 Component.js

 export default Component(props) {

     const { data } = props

     return (
         <div>{data}</div>
     )
 }


 vs

 App.js

 constructor() {  //class based constructor function
    super();     // invoke super function to initialize state. 
    this.state {   // all state data is handled in this state
        data: initialState;
        isLoading: false;
        newObject: []; //etc
    }

 <Component data={this.state.data} />

 Component.js

const Component = (props) => {

    const {data, isLoading, newObject } = props


     render() {
         return(
             <div>{props.data}</div>
         )
     }
     
 }

 


