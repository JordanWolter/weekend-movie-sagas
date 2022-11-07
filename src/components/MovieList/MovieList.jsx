import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@material-ui/core';
import Box from '@mui/material/Box';
import './MovieList.css'


function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory()
    const movies = useSelector(store => store.movies);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const addMovie = () => {

        history.push('/form');

    }

    //go to detail page
    const id = (id) => {

        console.log('id', id)

        dispatch({
            type: 'FETCH_DETAILS',
            payload: id
        })

        setOpen(!open);

        history.push('/details');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <Button variant='contained' startIcon={<AddCircleIcon />} onClick={addMovie}>Add Movie</Button>
            <Grid2 container spacing={3} className="movies">
                {movies.map(movie => {
                    return (
                        <Grid2 xs={6} sm={4} md={3} lg={3} onClick={() => id(movie.id)} key={movie.id} >
                            <Box
                                sx={{
                                    width: 225,
                                    height: 350,
                                    padding: 1,
                                    color: 'whitesmoke',
                                    margin: "auto",
                                    marginTop: 3,
                                    marginBottom: 3,
                                    borderRadius: 3,
                                    boxShadow: 20,
                                    backgroundColor: 'primary.dark',
                                    '&:hover': {
                                        backgroundColor: 'primary.main',
                                        opacity: [0.9, 0.8, 0.7],
                                        cursor: 'pointer'
                                    },
                                }}
                            >
                                <h3>{movie.title}</h3>
                                <img className='posterImage' src={movie.poster} alt={movie.title} />
                            </Box>


                        </Grid2>
                    );
                })}
            </Grid2>
        </main>

    );
}


export default MovieList;