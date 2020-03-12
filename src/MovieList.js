import React,{useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext';

const MovieList = () => {

    const [movies, SetMovies] = useContext(MovieContext)

    return(
        <div>
        {movies.map(item => (
            <Movie name={item.name} price={item.price} key={item.id}/>
        ))}
        </div>
    );
};

export default MovieList;