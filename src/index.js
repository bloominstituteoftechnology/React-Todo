import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';


const data = [
    {
      name: "Clean Room",
      id: 123,
      completed: false
    },
    {
      name: "Feed the Cats",
      id: 124,
      completed: false
    },
    {
      name: "Laundry",
      id: 1235,
      completed: false
    },
    {
      name: "Play Video Games",
      id: 1246,
      completed: false
    },
    {
      name: "Study Code",
      id: 1237,
      completed: false
    },
    {
      name: "Start a Cult",
      id: 1248,
      completed: false
    }
  ];
export default data;




const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




