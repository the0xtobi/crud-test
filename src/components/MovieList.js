import MovieShow from "./MovieShow";

function MovieList({ movies, deleteMovieById }) {
    // Movielist acts as the container for as many movies will be created
    const mapedMovies = movies.map((movie) =>{
        return <MovieShow key={movie.id} movie={movie} deleteMovieById={deleteMovieById} />
    })
   
    return (
        <div>
            <h2> {mapedMovies} </h2> //hgffgh
        </div>
    )
}

export default MovieList;