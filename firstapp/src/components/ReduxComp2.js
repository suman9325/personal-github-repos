import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actiontype from './ReduxAction';

class ReduxComp2 extends Component {
    state = {
        message: ""
    }

    showCounter = () => {
        this.setState({ counter: this.props.stateData })
    }

    setMessage = () => {
        this.props.dispatchMessage(this.state.message)
    }

    render() {
        return (
            <React.Fragment>
                <br /><br /><br />
                <h1>Counter value : {this.props.stateData}</h1>
                <button onClick={this.setMessage}>Click to say Hi </button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {

        stateData: state.counterReducer.reducer_data ,
        // stateMessage: state.messageReducer.reducer_msg || state.messageReducer.state.reducer_msg
    };

}

const mapDispatchToProps = dispatch => {
    return {
        dispatchMessage: (message) => dispatch({ type: Actiontype.SET_MESSAGE, data: message })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComp2);