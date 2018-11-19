import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button, Label } from 'react-bootstrap';

export default class About extends Component {
    constructor() {
        super();
        this.state = { empid: '', name: '', phone: '', designation: '' };
    }
    render() {
        return (
            <div className="container">

                <h3>
                    Add User
                    </h3>
                <br />
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <FormGroup
                        controlId="empid"
                    >
                        <ControlLabel>User ID</ControlLabel>
                        <FormControl
                            type="number"
                            value={this.state.empid}
                            placeholder="Enter ID"
                            onChange={(event) => this.setState({ empid: event.target.value })}
                        />
                        <FormControl.Feedback />
                        <br />
                        <ControlLabel> Name</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.name}
                            placeholder="Enter Name"
                            onChange={(event) => this.setState({ name: event.target.value })}
                        />
                        <FormControl.Feedback />
                        <br />
                        <ControlLabel>Contact Number</ControlLabel>
                        <FormControl
                            type="number"
                            value={this.state.phone}
                            placeholder="Enter Contact Number"
                            onChange={(event) => this.setState({ phone: event.target.value })}
                        />
                        <FormControl.Feedback />
                        <br />
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            type="email"
                            value={this.state.designation}
                            placeholder="Enter Email"
                            onChange={(event) => this.setState({ designation: event.target.value })}
                        />
                        <FormControl.Feedback />
                        <br />

                        <Button type="submit" > Submit </Button>
                    </FormGroup>
                </form>
            </div>
        );
    }

}


