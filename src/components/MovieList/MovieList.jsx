import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
// import { $CombinedState } from 'redux';
import Details from '../Details/Details';
import './MovieList.css'


function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory()
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //got to detail page
    const id = (id) => {

        console.log('id', id)

        dispatch({
            type: 'FETCH_ID',
            payload: id
        })

        history.push('/details');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div onClick={() => id(movie.id)} key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;