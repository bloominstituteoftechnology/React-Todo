import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';

const myTitle=props=>{

   return(<h1>props.titleContent</h1>);

}
const  myArr=[


        {
            task: 'Decorate Room',
            id: 1528817077286,
            completed: false
        },
        {
            task: 'Bake Cake',
            id: 1528817084358,
            completed: false
        },

    {
        task: ' Pack Return Gifts',
        id: 1528817084358,
        completed: false
    }


];

ReactDOM.render(<App />, document.getElementById('root'));
