import React, { Component } from 'react'
import { connect } from 'react-redux';
import MovieNominationCard from './MovieNominationCard'

class MovieNominations extends Component {
    render() {
        console.log(this.props.movies);
        if (this.props.error) {
            return (
                <div className="movie-nominations">
                    <p>{this.props.error}</p>
                </div>
            );
        } else {
            return (
                <div className="movie-nominations">
                    { this.props.movies.map(movie => (
                        <MovieNominationCard movie={movie} />
                    ))}
                </div>
            );
        }
        
    }
}

const mapStateToProps = state => ({
    movies: state.movies.nominated,
    error: state.movies.nom_error
});

export default connect(mapStateToProps, { })(MovieNominations);
