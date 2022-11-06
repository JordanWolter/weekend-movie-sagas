import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './MovieList.css'


function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory()
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const addMovie = () => {

        history.push('/form');
    
      }

    //got to detail page
    const id = (id) => {

        console.log('id', id)

        dispatch({
            type: 'FETCH_DETAILS',
            payload: id
        })

        history.push('/details');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={addMovie}>Add Movie</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div onClick={() => id(movie.id)} key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img className='posterImage' src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;