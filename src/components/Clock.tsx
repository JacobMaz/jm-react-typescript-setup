import React, { Component } from 'react';

type ClockState = {
    time: Date
}

type AccecptedProps = {
    testProp: string,
    optionalProp?: string
}

export default class Clock extends Component<AccecptedProps, ClockState> {
    constructor(props: AccecptedProps) {
        super(props)
    };

    tick() {
        this.setState({
            time: new Date()
        })
    };

    componentWillMount() {
        this.tick();
    }

    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }

    render() {
        return (
            <div>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
                <p>{this.props.testProp}</p>
                <p>{this.props.optionalProp}</p>
            </div>
        )
    };
};