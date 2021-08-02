import React, { Component } from 'react';

export default class MovieNominationCard extends Component {
    render() {
        return (
            <div className="movie-nom-card">
                <img src={this.props.movie["Poster"]} />
                <p>{this.props.movie["Title"]}</p>
            </div>
        )
    }
}