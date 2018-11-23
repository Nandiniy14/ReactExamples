import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../Actions/submitAction';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

export class About extends Component {
    constructor() {
        super();
        this.state = { data:{id: '', name: '', phone: '', email: '' } };
        this.onEventChange = this.onEventChange.bind(this);

    }
    handleSubmit(event){
        this.props.actions.submitAction(this.state.data);
        alert("Saved" + this.state.data.id);
        event.preventDefault();
    }
    onEventChange(event){
        const field = event.target.name;
        let data = this.state.data;
        data[field] = event.target.value;
        return this.setState({data : data});
    }
    render() {
        return (
            <div className="container">

                <h3>
                    Add User
                    </h3>
                    
                <br />
                <form id = 'userForm' onSubmit={(event) => this.handleSubmit(event)}>
                    <FormGroup
                        controlId="id"
                    >
                        <ControlLabel>User ID</ControlLabel>
                        <FormControl
                            type="number"
                            value={this.state.data.id}
                            name = "id"
                            placeholder="Enter ID"
                            onChange={this.onEventChange}
                        />
                        <FormControl.Feedback />
                        <br />
                        <ControlLabel> Name</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.name}
                            placeholder="Enter Name"
                            name = "name"
                            onChange={this.onEventChange}
                        />
                        <FormControl.Feedback />
                        <br />
                        <ControlLabel>Contact Number</ControlLabel>
                        <FormControl
                            type="number"
                            value={this.state.phone}
                            placeholder="Enter Contact Number"
                            name = "phone"
                            onChange={this.onEventChange}
                        />
                        <FormControl.Feedback />
                        <br />
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            type="email"
                            value={this.state.email}
                            placeholder="Enter Email"
                            name = "email"
                            onChange={this.onEventChange}
                        />
                        <FormControl.Feedback />
                        <br />

                        <Button type="submit" > Submit </Button>
                    </FormGroup>
                </form>
            <br />
            {this.props.submitReducer.map((data) => {
                    return (<div>
                        <p>Submitted User details are</p>
                        {data.id}
                        <br />
                        {data.email}
                    </div>);
                })}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        submitReducer: state.submitReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {

        actions: bindActionCreators(action, dispatch)

    };
}

export default connect(mapStateToProps, mapDispatchToProps) (About);
