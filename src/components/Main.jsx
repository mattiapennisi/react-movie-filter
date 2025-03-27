import { useState, useEffect } from 'react'

import movies from '../../data/movies.js'

export default function Main() {

    const [moviesList, setMoviesList] = useState(movies)
    const [genreSelected, setGenreSelected] = useState('')
    const [titleSelected, setTitleSelected] = useState('')
    const [filteredMovies, setFilteredMovies] = useState(movies)
    const [addMovie, setAddMovie] = useState('')
    
    function handleAddMovie(e) {
        e.preventDefault()

        const newMovie = {
            id: moviesList.length + 1,
            title: addMovie,
            genre: ''
        }
        
        setMoviesList([...moviesList, newMovie])
        setAddMovie('')
    }

    useEffect(() => {
        const filteredByGenre = genreSelected === '' ? moviesList : moviesList.filter(movie => movie.genre === genreSelected)
        const filteredByTitle = titleSelected === '' ? filteredByGenre : filteredByGenre.filter(movie => movie.title.toLowerCase().includes(titleSelected.toLowerCase()))
        setFilteredMovies(filteredByTitle)
    }, [moviesList, genreSelected, titleSelected])

    return (
        <main id="main" className='text-center'>
            <h1 className='m-1 fw-bold'>Movies Database</h1>

            <form>
                <h2>Filtri ricerca</h2>
                <select name="moviesSelect" id="moviesSelect" className='m-1' value={genreSelected} onChange={(e) => setGenreSelected(e.target.value)}>
                    <option value="">Seleziona il genere</option>
                    <option value="Azione">Azione</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Fantascienza">Fantascienza</option>
                </select>

                <input type="text" placeholder='Cerca per titolo' className='m-1' value={titleSelected} onChange={(e) => setTitleSelected(e.target.value)} />
            </form>

            <ul>
                {filteredMovies.map(movie => (
                    <li key={movie.id} className='m-1'>{movie.title}</li>
                ))}
            </ul>

            <form onSubmit={handleAddMovie}>
                <input type="text" placeholder='Aggiungi nuovo film' className='m-1' value={addMovie} onChange={(e) => setAddMovie(e.target.value)} />
                <button type="submit">Invia</button>
            </form>
        </main>
    )
}