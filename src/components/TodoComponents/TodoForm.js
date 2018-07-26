import React from 'react';

const Harryform = props => {
   return ( 
        <form>
        <input type="text" onChange={props.handleChange} />
        <button onClick={props.handleSubmit}>Add Todo</button>
        <button onclick={}>Clear Completed</button>
        </form>
   );
};





