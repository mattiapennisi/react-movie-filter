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
        <main className="container py-4 m-5 border-3">
            <h1 className="text-center fw-bold h2 mb-4 ">Movies Database</h1>

            <form className="mb-4">
                <h2 className="h4 mb-3">Filtri ricerca</h2>
                <div className="row g-3">
                    <div className="col-md-6">
                        <select
                            className="form-select"
                            value={genreSelected}
                            onChange={(e) => setGenreSelected(e.target.value)}
                        >
                            <option value="">Seleziona il genere</option>
                            <option value="Azione">Azione</option>
                            <option value="Romantico">Romantico</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Fantascienza">Fantascienza</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Cerca per titolo"
                            value={titleSelected}
                            onChange={(e) => setTitleSelected(e.target.value)}
                        />
                    </div>
                </div>
            </form>

            <ul className="list-group mb-4">
                {filteredMovies.map(movie => (
                    <li key={movie.id} className="list-group-item">{movie.title}</li>
                ))}
            </ul>

            <form onSubmit={handleAddMovie} className="row g-3">
                <div className="col-md-8">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Aggiungi nuovo film"
                        value={addMovie}
                        onChange={(e) => setAddMovie(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <button type="submit" className="btn btn-primary w-100">Invia</button>
                </div>
            </form>
        </main>
    )
}