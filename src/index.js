import React from 'react';
import ReactDOM from "react-dom";
import App from "./App"




const data = [
    {
      name: "Dog food",
      id: 123,
      purchased: false
    },
    {
      name: "Chips",
      id: 124,
      purchased: false
    },
    {
      name: "Soap",
      id: 1235,
      purchased: false
    },
    {
      name: "Apples",
      id: 1246,
      purchased: false
    },
    {
      name: "Soda",
      id: 1237,
      purchased: false
    },
    {
      name: "Pizza",
      id: 1248,
      purchased: false
    }
  ];
export default data;

 
        
        
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);