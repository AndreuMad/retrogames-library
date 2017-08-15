import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import { Form } from '../components';
import * as gamesActionCreators from '../actions/games';
import * as filestackActionCreators from '../actions/filestack';

class AddGameContainer extends Component {
    constructor(props) {
        super(props);
        // Bind this (context) to the functions to be passed down to the children components
        this.submit = this.submit.bind(this);
        this.uploadPicture = this.uploadPicture.bind(this);
    }

    submit(event) {
        event.preventDefault();
        this.props.gamesActions.postGame();
        hashHistory.push('/games');
    }

    // Dispatch UPLOAD_PICTURE to the filestack saga
    uploadPicture() {
        this.props.filestackActions.uploadPicture();
    }

    render() {
        const { picture } = this.props;

        return (
            <Form
                handleSubmit={this.submit}
                picture={picture}
                uploadPicture={this.uploadPicture}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        // We access the state to retrieve the url and show
        // the preview of the image in the form
        picture: state.getIn(['filestack', 'url'], '')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // We get the actions to dispatch
        // POST_GAME actions and UPLOAD_PICTURE
        gamesActions: bindActionCreators(gamesActionCreators, dispatch),
        filestackActions: bindActionCreators(filestackActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGameContainer);
