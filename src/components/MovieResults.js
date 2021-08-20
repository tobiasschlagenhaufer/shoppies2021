import React, { useEffect, useState } from 'react';
import MovieResultCard from './MovieResultCard';
import { connect } from 'react-redux';
import { useTransition } from 'react-spring';

const MovieResults = (props) => {
    const [index, setIndex] = useState(0);
    const [right, setDir] = useState(true);
    const show = 4;
    const [showMovies, setShowMovies] = useState([]);

    const forward = () => {
        if (index < props.movies.length - show){
            setIndex(index + 1);
            setDir(true);
        }
    }

    const back = () => {
        if (index > 0){
            setIndex(index - 1);
            setDir(false);
        }
    }

    useEffect(() => {
        setShowMovies(props.movies.slice(index, index + show));
    }, [props.movies, index]);

    useEffect(() => {
        setIndex(0);
    }, [props.movies]);

    const showMoviesTransitionLeft = useTransition(showMovies, {
        from: {opacity: 0, marginLeft: -150},
        enter: {opacity: 1,  marginLeft: 10},
        leave: {opacity: 0, marginLeft: -150, zIndex: -1}
    });

    const showMoviesTransitionRight = useTransition(showMovies, {
        from: {opacity: 0, marginRight: -150},
        enter: {opacity: 1,  marginRight: 0},
        leave: {opacity: 0, marginRight: -150, zIndex: -1}
    });

    if (props.error) {
        return (
            <div className="movie-res-error">
                <p className="error-text">{props.error} 😞</p>
            </div>
        );
    }
    return (
        <div className="movie-results">

            {(showMovies.length > 0) ? <button className="res-btn" onClick={back}>{'<'}</button> : null}
            <div className="movie-res-cards">
                {(right ? showMoviesTransitionRight : showMoviesTransitionLeft)((styles, movie) => {
                    return <MovieResultCard movie={movie} key={'res-'+movie["imdbID"]} style={styles}/>
                    
                })}
            </div>

            {(showMovies.length > 0) ? <button className="res-btn-left res-btn" onClick={forward}>{'>'}</button> : null}
        </div>
    );
}

const mapStateToProps = state => ({
    movies: state.movies.results,
    error: state.movies.search_error
});

export default connect(mapStateToProps, { })(MovieResults);
