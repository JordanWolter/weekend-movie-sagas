import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
// import { $CombinedState } from 'redux';

function Details() {
    const id = useSelector(store => store.id);
    const movies = useSelector(store => store.movies);

    console.log(id);

    return (
        <>
            <section className="movieDetails">
                {movies.map(movie => {
                    if (movie.id === id) {
                        return (
                            <div key={movie.id} >
                                <h3>{movie.title}</h3>
                                <img src={movie.poster} alt={movie.title} />
                                <p>{movie.description}</p>
                                <button onClick={() => back}>Back</button>
                            </div>
                        );
                    }

                })}
            </section>
        </>
    )
}

export default Details