import React, { Component } from 'react';

// We import connect from react-redux
import { connect } from 'react-redux';
// bindActionCreators comes handy to wrap action creators in dispatch calls
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';

import { Modal, GamesListManager } from '../components';

// we import the action-creators to be binde with bindActionCreators
import * as gamesActionCreators from '../actions/games';

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
        this.props.showSelectedGame(this.props.games[index]);

        $('#game-modal').modal();
    }

    getGames() {
        // this.props.gamesActions.getGames();
        this.props.getGames();
    }

    deleteGame(id) {
        this.props.deleteGame(id);
    }

    setSearchBar(event) {
        this.props.setSearchString(event.target.value.toLowerCase());
    }

    render() {
        const { games, selectedGame, searchString } = this.props;
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

function mapStateToProps(state) {
    return {
        // We get all the games to list in the page
        games: state.getIn(['games', 'list'], Immutable.List()).toJS(),
        selectedGame: state.getIn(['games', 'selectedGame'], Immutable.List()).toJS(),
        searchString: state.getIn(['games', 'searchString'], '')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // gamesActions: bindActionCreators(gamesActionCreators, dispatch)
        getGames: () => dispatch(gamesActionCreators.getGames()),
        deleteGame: (id) => dispatch(gamesActionCreators.deleteGame(id)),
        showSelectedGame: (game) => dispatch(gamesActionCreators.showSelectedGame(game)),
        setSearchString: (keyword) => dispatch(gamesActionCreators.setSearchString(keyword))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
