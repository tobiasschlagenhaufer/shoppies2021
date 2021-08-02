import React, { Component } from 'react'
import { connect } from 'react-redux';
import MovieNominationCard from './MovieNominationCard'

class MovieNominations extends Component {
    render() {
        return (
            <div className="movie-nominations">
                <div className="movie-reel">
                    <div className="sidebar">

                    </div>
                    <div className="movie-reel-center">
                        { this.props.movies.map(movie => (
                            <MovieNominationCard movie={movie} key={movie["imdbID"]}/>
                        ))}
                    </div>
                    <div className="sidebar">

                    </div>
                </div> 
            </div>
        );
        
    }
}

const mapStateToProps = state => ({
    movies: state.movies.nominated,
    error: state.movies.nom_error
});

export default connect(mapStateToProps, { })(MovieNominations);
