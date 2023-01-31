import { useState } from 'react';
import MovieSearch from './components/MovieSearch';

function App() {
  const [movies, setMovies] = useState([])

  const createMovie = (input) => {
    console.log(input)
  }

  return (
    <div className="App">
      <MovieSearch onCreate={createMovie} />
    </div>
  );
}

export default App;
