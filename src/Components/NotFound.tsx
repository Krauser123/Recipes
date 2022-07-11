import React, { Component } from 'react';
import Constants from '../Classes/Constants';

interface NotFoundProps {
}

interface NotFoundState {
}

export class NotFound extends Component<NotFoundProps, NotFoundState> {
    static displayName = NotFound.name;

    render() {

        return (
            <div className="notfoundContainer">
                <div className="notfound">
                    <div className="notfound-404">
                        <h3>Oops! Page not found</h3>
                        <h1><span>4</span><span>0</span><span>4</span></h1>
                    </div>
                    <h2>{Constants.NotFoundMessage}</h2>
                </div>
            </div>
        );
    }
}
