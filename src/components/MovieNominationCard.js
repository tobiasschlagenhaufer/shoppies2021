import React from 'react';
import { animated, useSpring } from 'react-spring';
import { connect } from 'react-redux';
import { deleteMovie } from '../actions/movieActions'
import PropTypes from 'prop-types';
import close from '../close.svg';

export const holes = () => {
    const arr = [];
    for(let i=0; i<6; i++) {
        arr.push(<div className="movie-reel-hole"></div>)
    }
    return arr;
}

const MovieNominationCard = (props) => {
    const [{ y }, set] = useSpring(() => ({ y: 100 }));

    const remove = () => {
        document.getElementById(props.movie["imdbID"]).style.zIndex = 99;
        props.deleteMovie(props.movie);
    }

    return (
        <animated.div 
            className="movie-reel"
            id={props.movie["imdbID"]}
            style={props.styles}
            onMouseEnter={() => set({ y: 0 })}
            onMouseLeave={() => set({ y: 100 })}
        >
            <div className="sidebar">
                {holes()}
            </div>
            <div className="movie-reel-center">
                <div className="movie-nom-card">
                    <img src={props.movie["Poster"]} alt="movie poster"/>
                    <div className="movie-nom-text">
                        <p>{props.movie["Title"]}</p>
                    </div>
                    <animated.div
                        style={{ transform: y.interpolate(v => `translateX(${v}%`) }}
                        className="remove-btn-container"
                        onClick={remove}
                    >
                        <img src={close} className="close-btn" alt="remove button"/>
                        <p style={{fontSize: '1.5rem', marginTop: 0}}>Cut</p>
                    </animated.div>
                </div>
            </div>
            <div className="sidebar">
                {holes()}
            </div>
        </animated.div>
    );
}
const mapStateToProps = state => ({
    movies: state.movies.nominated,
    error: state.movies.nom_error,
    deleteMovie: PropTypes.func.isRequired
});

export default connect(mapStateToProps, { deleteMovie })(MovieNominationCard);