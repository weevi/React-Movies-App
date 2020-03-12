import React,{useContext} from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
const [movies, setMovies] = useContext(MovieContext);

    return(
        <div>
        <h3>Rima Pask</h3>
        <p>My movie list: {movies.length} </p>
        </div>
    );
};

export default Nav;