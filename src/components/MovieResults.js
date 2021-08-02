import React, { Component } from 'react';
import MovieResultCard from './MovieResultCard';
import { connect } from 'react-redux';

class MovieResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showItems: 4,
            index: 0,
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        console.log(window.innerWidth);
        this.setState({ showItems: ((window.innerWidth - 100) / (2 * 160)), index: this.state.index });
    }

    forward = () => {
        if (this.state.index < this.props.movies.length - this.state.showItems){
            this.setState({index: this.state.index + 1, width: this.state.width});
        }
    }

    back = () => {
        if (this.state.index > 0){
            this.setState({index: this.state.index - 1, width: this.state.width});
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

                {this.props.movies.slice(this.state.index, this.state.index + this.state.showItems).map(movie => (
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
