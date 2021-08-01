import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.fetchMovies(this.state.search);
    }

    render() {
        return (
            <div className="search">
                <h1>Search Movie</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Body: </label><br/>
                        <input
                            type="text"
                            name="search"
                            value={this.state.search}
                            onChange={this.onChange}
                        />
                    </div>

                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

SearchBar.propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    movies: state.movies.results
});


export default connect(mapStateToProps, { fetchMovies })(SearchBar);
