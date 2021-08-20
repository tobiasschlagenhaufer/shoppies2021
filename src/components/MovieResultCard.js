import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { nominateMovie } from '../actions/movieActions';
import { connect } from 'react-redux';
import { animated } from 'react-spring';

class MovieResultCard extends Component {

    onClick = (e) => {
        this.props.nominateMovie(this.props.movie);
    }

    render() {
        return (
            <animated.div style={this.props.style} className="movie-res-card">
                <img src={this.props.movie["Poster"]} alt="movie poster" />
                <div className="movie-res-text">
                    <p>{this.props.movie["Title"]}</p>
                </div>
                <button className="movie-res-btn center" onClick={this.onClick}>+</button>
            </animated.div>
        );
    }
}

MovieResultCard.propTypes = {
    nominateMovie: PropTypes.func.isRequired
}

export default connect(null, { nominateMovie })(MovieResultCard);
