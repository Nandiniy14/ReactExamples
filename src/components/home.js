import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3> Welcome </h3>
                <Link to="about" className="btn btn-primary btn-lg"> Click Here </Link>
            </div>
            );
    }
}