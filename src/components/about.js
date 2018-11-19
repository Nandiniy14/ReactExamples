import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/action';
import * as emailAction from '../actions/emailAction';

import PropTypes from "prop-types";

//import sampleReducer from './Reducers/reducers';
//import { SampleAction } from './actions/action';
import { bindActionCreators } from 'redux';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: { text: '' },
            email: { id: '' }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sampleRow = this.sampleRow.bind(this);
        this.onEvent = this.onEvent.bind(this);
        this.onEventChange = this.onEventChange.bind(this);
    }
    handleSubmit() {
        this.props.actions.SampleAction(this.state.name);
        this.props.action.emailAction(this.state.email);

        console.log(this.props);
        alert("Saved" + this.state.email);
        //event.preventDefault();
    }

    sampleRow(name, index) {
        return (
            <div key={index}>
                {name.text}
            </div>
        );
    }

    onEvent(event) {
        const name = this.state.name;
        name.text = event.target.value;
        this.setState({ name: name });
    }

    onEventChange(event) {
        const email = this.state.email;
        email.id = event.target.value;
        this.setState({ email: email });
    }

    render() {
        return (
            <div>
                <h3>Sample </h3>
                {this.props.sampleReducer.map((name) => {
                    return (<div>
                        {name.text}
                    </div>);
                })}
                {this.props.sampleReducer.map((email) => {
                    return (<div>
                        {email.email}
                    </div>);
                })}
                <input type="text" placeholder="Enter text" value={this.state.name.text} onChange={this.onEvent} />
                <br />
                <input type="text" value={this.state.email.id} onChange={(event) => this.setState({ email: event.target.value })} />
                <br />
                <br />

                <button onClick={this.handleSubmit}>Submit </button>

            </div>
        );
    }
}

About.propTypes = {

    sampleReducer: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        sampleReducer: state.sampleReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //SampleAction: name => dispatch(action.SampleAction(name))
        actions: bindActionCreators(action, dispatch),
        action: bindActionCreators(emailAction, dispatch)

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
