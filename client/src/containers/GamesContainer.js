import React, { Component } from 'react';

// We import connect from react-redux
import { connect } from 'react-redux';
// bindActionCreators comes handy to wrap action creators in dispatch calls
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';

import { Modal, GamesListManager } from '../components';

import * as gamesActionCreators from '../constants/games';

class GamesContainer extends Component {
    constructor(props) {
        super(props);

        // The initial state
        this.state = {
            selectedGame: {},
            searchString: ''
        };

        // Bind the methods to this (context)
        this.deleteGame = this.deleteGame.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.setSearchBar = this.setSearchBar.bind(this);
    }

    componentDidMount() {
        this.getGames();
    }

    toggleModal(index) {
        this.setState({
            selectedGame: this.state.games[index]
        });

        $('#game-modal').modal();
    }

    getGames() {
        fetch('http://localhost:8080/games', {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json()) // The json response to object literal
        .then(data => this.setState({ games: data }));
    }

    deleteGame(id) {
        fetch(`http://localhost:8080/games/${id}`, {
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(response => {
            // The game is also removed from the state thanks to the filter function
            this.setState({
                games: this.state.games.filter(game => game._id !== id)
            });
            console.log(response.message);
        })
    }

    setSearchBar(event) {
        this.setState({ searchString: event.target.value.toLowerCase() });
    }

    render() {
        const { games, selectedGame, searchString } = this.state;
        return (
            <div>
                <Modal game={selectedGame} />
                <GamesListManager
                    games={games}
                    searchString={searchString}
                    setSearchBar={this.setSearchBar}
                    toggleModal={this.toggleModal}
                    deleteGame={this.deleteGame}
                />
            </div>
        );
    }
}
