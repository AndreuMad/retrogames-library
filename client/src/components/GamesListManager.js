import React from 'react';
import { Link } from 'react-router';
import Game from './Game';

const GamesListManager = (props) => {
    const { games, searchString, setSearchBar, toggleModal, deleteGame } = props;

    return (
        <div className="container">
            <div className="row text-left">
                <Link to="/games/add" className="btn btn-danger">Add a new Game!</Link>
            </div>
            <div className="row">
                <input
                    type="search"
                    placeholder="Search by Name"
                    className="form-control search-bar"
                    onKeyUp={setSearchBar}
                />
            </div>
            <div className="row">
                {
                    // A Game is only shown if its name contains the string from the searchString
                    games
                        .filter(game => game.name.toLowerCase().includes(searchString))
                        .map((game, index) => {
                            return (
                                <Game {...game}
                                      key={game._id}
                                      index={index}
                                      toggleModal={toggleModal}
                                      deleteGame={deleteGame}
                                />
                            );
                        })
                }
            </div>
            <hr/>
        </div>
    );
};

export default GamesListManager;