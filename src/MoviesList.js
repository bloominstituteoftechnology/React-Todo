import React from 'react';
const MovieList = props => {
    return (
        <ul>
            {props.movies.map((movie,i) => {
                return <li key={i}>{movie}</li>;
            } )}
        </ul>
    )
};

// export default MovieList;