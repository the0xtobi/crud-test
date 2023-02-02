import { useState } from 'react';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';

function App() {
  // This will contain all the movies in our app. It's our store
  const [movies, setMovies] = useState([])

  // This is the functio responsible for creating our movie. How does it work? we
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
