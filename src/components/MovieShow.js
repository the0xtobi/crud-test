function MovieShow({ movie, deleteMovieById }){
    // we have to use handler onClick + recieve the movie id
    const handleClick = () =>{
        deleteMovieById(movie.id)
    }
    return(
        // div displays title of the movie and button to delete movie tile by-
        // accessing its id
        <div>
            {movie.title}
            <button onClick={handleClick}>X</button>
        </div>
    )
}
export default MovieShow;