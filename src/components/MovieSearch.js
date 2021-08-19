import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';
import { useSpring, animated } from 'react-spring';

const MovieSearch = (props) => {
    const [search, setSearch] = useState('');
    const [{ y, color }, set] = useSpring(() => ({ y: 100, color: "#fff" }));

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.fetchMovies(search);
    }
    
    return (
        <div className="search">
            <form onSubmit={onSubmit}>
                <div className="desc-box">
                    <p className="desc-lg">Nominate your favourite movies for the Shoppies Awards 🏆</p>
                    <p className="desc-sm">Start by searching below</p>
                </div>
                <div className="search-box">
                    <input
                        className="search-input"
                        type="text"
                        name="search"
                        value={search}
                        onChange={onChange}
                        placeholder="Search for movie"
                    />

                    {/* <button type="submit" className="search-btn">GO</button> */}
                    <button
                        className="search-btn"
                        onMouseEnter={() => set({ y: 100, color: "#fff" })}
                        onMouseLeave={() => set({ y: 0, color: "#fff" })}
                    >
                        <animated.span style={{ color }}>GO</animated.span>
                        <animated.div
                            style={{ transform: y.interpolate(v => `translateX(${v}%`) }}
                            className="glance"
                        />
                    </button>
                </div>
            </form>
        </div>
    )
}

MovieSearch.propTypes = {
    fetchMovies: PropTypes.func.isRequired
}

export default connect(null, { fetchMovies })(MovieSearch);
