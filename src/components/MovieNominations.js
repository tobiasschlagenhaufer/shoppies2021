import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MovieNominationCard, {holes} from './MovieNominationCard';
import { useTransition } from 'react-spring';
import Modal from 'react-modal';

const MovieNominations = (props) => {

    const movieTransition = useTransition(props.movies, {
        from: {marginTop: -100, opacity: 0},
        enter: {marginTop: 0, opacity: 1},
        leave: {marginTop: -130, opacity: 0.4, zIndex: -1}
    })

    const lastCard = () => {
        return (
            <div className="movie-reel">
                <div className="sidebar sb-lite">
                    {holes()}
                </div>
                <div className="movie-reel-center">
                    <div className="movie-nom-last">
                    </div>
                </div>
                <div className="sidebar sb-lite">
                    {holes()}
                </div>
            </div>
        )
    }

    useEffect(() => {
        if (props.movies.length >= 3) {
            document.getElementsByClassName("movie-nom-last")[0].style.backgroundColor = "#2E4435";
        } else {
            document.getElementsByClassName("movie-nom-last")[0].style.backgroundColor = "#F7F8EC";
        }
    }, [props.movies]);

    return (
        <div className="movie-nominations">
            { movieTransition((styles, movie) => (
                <MovieNominationCard movie={movie} key={movie["imdbID"]} styles={styles}/>
            ))}
            { lastCard() }

        </div>
    );
}

const mapStateToProps = state => ({
    movies: state.movies.nominated,
    error: state.movies.nom_error
});

export default connect(mapStateToProps, { })(MovieNominations);
