import { useState, useEffect } from 'react'

import movies from '../../data/movies.js'

export default function Main() {

    const [genreSelected, setGenreSelected] = useState('')
    const [filteredMovies, setFilteredMovies] = useState('movies')

    useEffect(() => {
        const filtered = genreSelected === '' ? movies : movies.filter(movie => movie.genre === genreSelected)
        setFilteredMovies(filtered)
    }, [genreSelected])

    return (
        <main id="main" className='text-center'>
            <h1 className='m-1 fw-bold'>Movies Database</h1>

            <ul>
                {filteredMovies.map(movie => (
                    <li key={movie.id} className='m-1'>{movie.title}</li>
                ))}
            </ul>

            <form>
                <select name="moviesSelect" id="moviesSelect" className='m-1' value={genreSelected} onChange={(e) => setGenreSelected(e.target.value)}>
                    <option value="">Seleziona il genere</option>
                    <option value="Azione">Azione</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Fantascienza">Fantascienza</option>
                </select>
            </form>
        </main>
    )
}