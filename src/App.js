import { useState } from 'react';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([])

  const createMovie = (input) => {
    const updatedMovies = [...movies,
    { id: Math.round(Math.random() * 9999), title: input }]
    setMovies(updatedMovies)
  }

  return (
    <div className="App">
      <MovieList movies={movies} />
      <MovieSearch onCreate={createMovie} />
    </div>
  );
}

export default App;
