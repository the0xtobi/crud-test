function MovieShow({ movie, deleteMovieById }){
    const handleClick = () =>{
        deleteMovieById(movie.id)
    }
    return(
        // div displays title of the movie
        <div>
            {movie.title}
            <button onClick={handleClick}>X</button>
        </div>
    )
}
export default MovieShow;