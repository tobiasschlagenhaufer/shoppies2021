import React from 'react';
import { animated } from 'react-spring';

export const holes = () => {
    const arr = [];
    for(let i=0; i<6; i++) {
        arr.push(<div className="movie-reel-hole"></div>)
    }
    return arr;
}

const MovieNominationCard = (props) => {

    return (
        <animated.div className="movie-reel" style={props.styles}>
            <div className="sidebar">
                {holes()}
            </div>
            <div className="movie-reel-center">
                <div className="movie-nom-card">
                    <img src={props.movie["Poster"]} />
                    <p>{props.movie["Title"]}</p>
                </div>
            </div>
            <div className="sidebar">
                {holes()}
            </div>
        </animated.div>
    );
}

export default MovieNominationCard;