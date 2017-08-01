// Import React from react.

// Create a const arrow function called MoviesList.
  // Return an unordered list
    // Inside the unordered list, embed a javascript expression (curly brackets).
      // Inside the javascript expression, map the movies array
        // The function inside map should take in two arguments, movie and i (for index).
        // The function should return a list item, with a javascript expression movie (the same variable as map).
        // The list item should have an attribute called key, that takes in i as a javascript expression.
// Outside the arrow function, export the function MoviesList as a default.

import React from 'react';

const MoviesList = (props) => {  // stateless, dumb, presentational, functional
  console.log(props);
  return (
  	<ul>
  	  {props.movies.map((element, index => {
  	  	return <li{index}>{element}</li>;
  	  })}
  	</ul>
   )
};

export default MoviesList;