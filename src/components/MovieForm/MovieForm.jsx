import { useState } from "react"

function MovieForm(){
    const [movieTitle, setTitle] = useState('');
    const [movieUrl, setUrl] = useState('');
    const [movieDescription, setDescription] = useState('');

    const inputTitle = (event) => {

        setTitle(event.target.value)

    }

    const inputUrl = (event) => {

        setUrl(event.target.value)

    }

    const inputDescription = (event) => {

        setDescription(event.target.value)

    }

    const submit = () => {

        const movieToAdd= {
            title: movieTitle,
            url: movieUrl,
            description: movieDescription
        }

        dispatch({
            type: 'ADD_MOVIE',
            payload: movieToAdd
        })

    }
    
    return(
        <>
        <input type='text' placeholder="Movie Title" onChange={inputTitle}/>
        <input type='text' placeholder="Image URL" onChange={inputUrl}/>
        <textarea type='text' placeholder="Move Description" onChange={inputDescription}/>
        {/* <dropdown/> */}
        <button onClick={submit}>Add Movie</button>
        </>
    )
}
export default MovieForm;