import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MovieNominationCard, {holes} from './MovieNominationCard';
import { useTransition } from 'react-spring';
import Modal from 'react-modal';

Modal.setAppElement('.App');

const MovieNominations = (props) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const movieTransition = useTransition(props.movies, {
        from: {marginTop: -100, opacity: 0},
        enter: {marginTop: 0, opacity: 1},
        leave: {marginTop: -130, opacity: 0.4, zIndex: -1}
    })

    const lastCard = () => {
        return (
            <div className="movie-reel">
                <div className="sidebar sb-lite">
                    {holes()}
                </div>
                <div className="movie-reel-center">
                    <div className="movie-nom-last">
                    </div>
                </div>
                <div className="sidebar sb-lite">
                    {holes()}
                </div>
            </div>
        )
    }

    useEffect(() => {
        if (props.movies.length >= 3) {
            document.getElementsByClassName("movie-nom-last")[0].style.backgroundColor = "#2E4435";
        } else {
            document.getElementsByClassName("movie-nom-last")[0].style.backgroundColor = "#F7F8EC";
        }

        if (props.movies.length == 5) {
            openModal();
        }
    }, [props.movies]);

    return (
        <div className="movie-nominations">
            { movieTransition((styles, movie) => (
                <MovieNominationCard movie={movie} key={movie["imdbID"]} styles={styles}/>
            ))}
            { lastCard() }
            <Modal
                className="Modal"
                overlayClassName="Overlay"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <button className="modal-close" onClick={closeModal}>X</button>
                <div className="modal-header">
                    All Set!
                </div>
                <div className="modal-desc">
                    Your 5 nominated movies are saved.
                </div>
            </Modal>
        </div>
    );
}

const mapStateToProps = state => ({
    movies: state.movies.nominated,
    error: state.movies.nom_error
});

export default connect(mapStateToProps, { })(MovieNominations);
