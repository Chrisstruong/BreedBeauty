import React from 'react';
import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BreedPhotos (props) {
    const [dogBreeds, setDogBreeds] = useState(null);

    useEffect( () => {
        const URL = 'https://dog.ceo/api/breed/hound/images'
        fetch (URL)
        .then((response) => response.json())
        .then((json) => {
            setDogBreeds(json)
        })
        .catch(console.error)
    }, []);

    return(
        <section className ="breed-gallery">

            {dogBreeds.map((dogBreed, idx) => { 
            return (
                <img src= {dogBreed.message} alt="Dog Photos"/>
            )
            })}
        </section>
    )
}

export default BreedPhotos
