import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { nominateMovie } from '../actions/movieActions';
import { connect } from 'react-redux';

class MovieResultCard extends Component {

    onClick = (e) => {
        this.props.nominateMovie(this.props.movie);
    }

    render() {
        return (
            <div className="movie-res-card">
                <img src={this.props.movie["Poster"]} />
                <p>{this.props.movie["Title"]}</p>
                <button className="movie-res-btn center" onClick={this.onClick}>+</button>
            </div>
        );
    }
}

MovieResultCard.propTypes = {
    nominateMovie: PropTypes.func.isRequired
}

export default connect(null, { nominateMovie })(MovieResultCard);
