const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

const Countdown = React.createClass({
    getInitialState: function () {
        return {count: 0};
    },
    handleSetCountDown: function (seconds) {
        this.setState({
            count: seconds
        });
    },
    render: function () {
        var {count} = this.state;
        return (
            <div>
                <Clock totalSeconds={count} />
                <CountdownForm onSetCountdown={this.handleSetCountDown} />
             </div>
        );
    }
});

module.exports = Countdown;
