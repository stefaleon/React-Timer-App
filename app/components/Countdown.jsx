const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
const Controls = require('Controls');

const Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: 'stopped'
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count:0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUpdate: function (nextProps, nextState) {
        // console.log('componentWillUpdate');
    },
    componentWillMount: function () {
        // console.log('componentWillMount');
    },
    componentDidMount: function () {
        // console.log('componentDidMount');
        // console.log('refs:',this.refs);
        // console.log('props:',this.props);
        //console.log('state:',this.state);
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
        // console.log('component did unmount, interval cleared');
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

            if (newCount === 0) {
                this.setState({countdownStatus: 'stopped'});
            }


        }, 1000);
    },
    handleSetCountdown: function (seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    handleStatusChange: function (newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    },
    render: function () {
        var {count, countdownStatus} = this.state;
        var renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls
                    countdownStatus={countdownStatus}
                    onStatusChange={this.handleStatusChange}
                    />;
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown} />
            }
        };

        return (
            <div>
                <h1 className="page-title">Countdown</h1>
                <Clock totalSeconds={count} />
                {renderControlArea()}
             </div>
        );
    }
});

module.exports = Countdown;
