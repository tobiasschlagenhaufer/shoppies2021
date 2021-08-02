import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';

class MovieSearch extends Component {
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
                <form onSubmit={this.onSubmit}>
                    <div className="search-box">
                        <input
                            className="search-input"
                            type="text"
                            name="search"
                            value={this.state.search}
                            onChange={this.onChange}
                        />

                        <button type="submit" className="search-btn">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

MovieSearch.propTypes = {
    fetchMovies: PropTypes.func.isRequired
}

export default connect(null, { fetchMovies })(MovieSearch);