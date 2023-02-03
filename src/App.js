import { useState } from 'react';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';


function App() {
  // This will contain all the movies in our app. It's our store, movies. Thats why-
  // the default state is an empty array
  const [movies, setMovies] = useState([])

  
const deleteMovieById = (id) =>{
  const updatedMovies = movies.filter((movie) =>{
    return(
      movie.id !== id
    )
  })
  setMovies(updatedMovies)
}


// This is the function responsible for creating our movie. How does it work? we-
  // collect user input and add it to our store.

  const createMovie = (input) => {
    const updatedMovies = [...movies,
    { id: Math.round(Math.random() * 9999), title: input }]
    setMovies(updatedMovies)
  }

  // Now movies been created and will need to be displayed. how? passed down as a-
  // prop into movielist.

  // Since we have a create function, how do we get the user input? we collect it-
  // from MovieSearch. How? pass it as a prop.

  return (
    <div className="App">
      <MovieList movies={movies} deleteMovieById={deleteMovieById} />
      <MovieSearch createMovie={createMovie} />
    </div>
  );
}

export default App;
