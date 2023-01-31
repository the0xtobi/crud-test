import { useState } from 'react'

function MovieSearch({ onCreate }) {
    const [input, setInput] = useState('')

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onCreate(input)
        setInput('')
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