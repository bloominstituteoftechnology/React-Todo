import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

class App extends React.Component {
   state = {
    movies: [],
    message: 'old message',
   };

   handleSubmit() {
      // event.preventDefault();
       const newMovie = {
           id: 4, title: 'Inception'
       };
       const newMovies = [...this.state.movies, newMovie];
       this.setState({ movies: newMovies });
   }

    render() {
        return (
         <div className="title">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input type="text" />
                <button type="submit">Add Movie</button>
            </form>

            <ul>
                {this.state.movies.map(movie => {
                    return <Movie key={movie.id} movie={movie} />
                })}
            </ul>
         </div>
        );
    }
}

render(<App />, document.getElementById('root'));
