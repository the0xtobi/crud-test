import { useState } from 'react'

function MovieSearch({ createMovie }) {
    const [input, setInput] = useState('')

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()   // prevents page from reloading
        createMovie(input)
        setInput('')  // returns our input box back to empty after we submit
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>Movie name</div>
                <input value={input} onChange={handleChange} />
                <button>Click me!</button>
            </form>
        </div>
    )
}

export default MovieSearch;