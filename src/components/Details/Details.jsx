import { Button } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './Details.css'

function Details() {
    const history = useHistory()
    const id = useSelector(store => store.id);
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);

    const back = () => {

        history.push('/');
    }

    return (
        <Container maxWidth="md" id="movieDetails">
            {movies.map(movie => {
                if (movie.id === id) {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <Box
                                sx={{
                                    width: 750,
                                    height: 'auto',
                                    margin: 'auto',
                                    paddingTop: 1.5,
                                    paddingBottom: 2,
                                    backgroundColor: 'black',
                                }}
                                >
                                <Box
                                    sx={{
                                        width: 600,
                                        height: 'auto',
                                        margin: 'auto',
                                        paddingTop: 1.5,
                                        paddingBottom: 1,
                                        backgroundColor: 'white',
                                    }}
                                >
                                    <img className='posterImage' src={movie.poster} alt={movie.title} />
                                </Box>
                            </Box>


                            {genres.map(genre => (
                                <p key={genre.name}>{genre.name}</p>
                            ))}
                            <Box
                                sx={{
                                    width: 800,
                                    height: 'auto',
                                    padding: 2,
                                    margin: 'auto',
                                    marginBottom: 5,
                                    borderRadius: 3,
                                    boxShadow: 20,
                                    backgroundColor: 'lightgrey',
                                }}
                            >
                                <p>{movie.description}</p>
                            </Box>
                            <Button variant='contained' startIcon={<ArrowBackIcon />} onClick={back}>Back To List</Button>
                        </div>
                    );
                }
            })}
        </Container>
    )
}

export default Details