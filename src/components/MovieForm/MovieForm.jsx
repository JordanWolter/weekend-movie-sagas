import { Button, Grid, TextField } from '@material-ui/core';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

function MovieForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [movieTitle, setTitle] = useState('');
    const [movieUrl, setUrl] = useState('');
    const [movieDescription, setDescription] = useState('');
    const [movieGenre, setGenre] = useState(0);

    const inputTitle = (event) => {

        setTitle(event.target.value);

    };

    const inputUrl = (event) => {

        setUrl(event.target.value);

    };

    const inputDescription = (event) => {

        setDescription(event.target.value);

    };

    const submit = () => {

        const movieToAdd = {
            title: movieTitle,
            poster: movieUrl,
            description: movieDescription,
            genre_id: movieGenre
        };

        dispatch({
            type: 'ADD_MOVIE',
            payload: movieToAdd
        });

        history.push('/');

    };

    const cancel = () => {

        setTitle('');
        setUrl('');
        setDescription('');
        setGenre(0);

        history.push('/');

    };

    return (
        <Stack spacing={3} width={500} alignItems='center' margin='auto'>
            <TextField required id="outlined-basic" 
            label="Movie Title" variant="outlined" 
            type='text' onChange={inputTitle} />

            <TextField required id="outlined-basic" 
            label="Image URL" variant="outlined" 
            type='text' onChange={inputUrl} />

            <TextField required multiline id="outlined-basic" 
            label="Move Description" type='text' 
            variant="outlined"  onChange={inputDescription} />

            <div className="dropdown">
                <button className="dropbtn">Genre</button>
                <div className="dropdown-content">
                    <a onClick={() => setGenre(1)}>Adventure</a>
                    <a onClick={() => setGenre(2)}>Animated</a>
                    <a onClick={() => setGenre(3)}>Biographical</a>
                    <a onClick={() => setGenre(4)}>Comedy</a>
                    <a onClick={() => setGenre(5)}>Disaster</a>
                    <a onClick={() => setGenre(6)}>Drama</a>
                    <a onClick={() => setGenre(7)}>Epic</a>
                    <a onClick={() => setGenre(8)}>Fantasy</a>
                    <a onClick={() => setGenre(9)}>Musical</a>
                    <a onClick={() => setGenre(10)}>Romantic</a>
                    <a onClick={() => setGenre(11)}>Science Fiction</a>
                    <a onClick={() => setGenre(12)}>Space-Opera</a>
                    <a onClick={() => setGenre(13)}>Superhero</a>
                </div>
            </div>
            <Button variant='contained' startIcon={<AddCircleIcon/>} onClick={submit}>Add Movie</Button>
            <Button variant='contained' startIcon={<CancelIcon/>}onClick={cancel}>Cancel</Button>
        </Stack>
    );
};
export default MovieForm;