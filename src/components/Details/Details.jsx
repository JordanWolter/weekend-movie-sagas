import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

function Details() {
    const history = useHistory()
    const id = useSelector(store => store.id);
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);

    // to get movie on refresh
    // useEffect({

    // },[])

    // goes back to list page
    const back = () => {

        history.push('/');
    }

    return (
        <section id="movieDetails">
            {movies.map(movie => {
                if (movie.id === id) {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} />
                            {genres.map(genre => (
                                <p key={genre.name}>{genre.name}</p>
                            ))}
                            <p>{movie.description}</p>
                            <button onClick={back}>Back</button>
                        </div>
                    );
                }
            })}
        </section>
    )
}

export default Details