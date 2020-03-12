import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 216225
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 6545312
        },
        {
            name: 'Inception',
            price: '$10',
            id: 5452555
        }
    ]);

    return <MovieContext.Provider value ={[movies, setMovies]}>
        {props.children}
        </MovieContext.Provider>
};