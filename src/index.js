import React from 'react';
import ReactDOM from "react-dom";
import App from "./App"




const data = [
    {
      name: "Pet the Dog",
      id: 123,
      purchased: false
    },
    {
      name: "Create React App",
      id: 124,
      purchased: false
    },
    {
      name: "Eat a Sandwich",
      id: 1235,
      purchased: false
    },
    {
      name: "Take a Walk",
      id: 1246,
      purchased: false
    },
    {
      name: "Study",
      id: 1237,
      purchased: false
    },
    {
      name: "Nap",
      id: 1248,
      purchased: false
    }
  ];
export default data;

 
        
        
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);