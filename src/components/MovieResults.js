import React, { Component } from 'react'
import MovieResultCard from './MovieResultCard'
import { connect } from 'react-redux';

class MovieResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        }
        this.showItems = 4;
        
    }

    forward = () => {
        if (this.state.index < this.props.movies.length - this.showItems){
            this.setState({index: this.state.index + 1});
        }
    }

    back = () => {
        if (this.state.index > 0){
            this.setState({index: this.state.index - 1});
        }
    }

    render() {
        if (this.props.error) {
            return (
                <div className="movie-results">
                    <p>{this.props.error}</p>
                </div>
            );
        }
        return (
            <div className="movie-results">
                {/* <MovieResultCard poster={samplePoster} title={"hello"} /> */}
                <button onClick={this.back}>{'<'}</button>

                {this.props.movies.slice(this.state.index, this.state.index + this.showItems).map(movie => (
                    <MovieResultCard movie={movie} key={movie["imdbID"]}/>
                ))}

                <button onClick={this.forward}>{'>'}</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.results,
    error: state.movies.search_error
});

export default connect(mapStateToProps, { })(MovieResults);
