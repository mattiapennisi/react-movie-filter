import { useState, useEffect } from 'react'

import movies from '../../data/movies.js'

export default function Main() {
    return (
        <main id="main" className='text-center'>
            <h1 className='m-1 fw-bold'>Movies Database</h1>

            <ul>
                {
                    movies.map(movie => {
                        return <li key={movie.id} className='m-1'>{movie.title}</li>
                    })
                }
            </ul>

            <form>
                <select name="moviesSelect" id="moviesSelect" className='m-1'>
                    {
                        movies.map(movie => {
                            return <option>{movie.genre}</option>
                        })
                    }
                </select>
            </form>
        </main>
    )
}