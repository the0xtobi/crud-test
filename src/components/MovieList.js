import MovieShow from "./MovieShow";

function MovieList({ movies }) {
    // Movielist acts as the container for as many movies will be created
    const mapedMovies = movies.map((movie) =>{
        return <MovieShow key={movie.id} movie={movie} />
    })
   
    return (
        <div>
            <h2> {mapedMovies} </h2>
        </div>
    )
}

export default MovieList;