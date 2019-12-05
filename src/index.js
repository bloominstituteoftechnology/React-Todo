import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ReactDOM from 'react-dom';


const data = [
    {
      name: "Clean Room",
      id: 123,
      purchased: false
    },
    {
      name: "Do Homework",
      id: 124,
      purchased: false
    },
    {
      name: "Laundry",
      id: 1235,
      purchased: false
    },
    {
      name: "Play Video Games",
      id: 1246,
      purchased: false
    },
    {
      name: "Study",
      id: 1237,
      purchased: false
    },
    {
      name: "Play Laser Tag",
      id: 1248,
      purchased: false
    }
  ];
export default data;




const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




