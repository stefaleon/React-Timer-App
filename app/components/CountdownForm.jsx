const React = require('react');

const CountdownForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;

        if (strSeconds.match(/^[0-9]*$/)) {
            this.props.onSetCountdown(parseInt(strSeconds));
            this.refs.seconds.value = '';
        }
    },
    render: function () {
        return (
            <div className="">
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds" />
                    <input type="submit" className="button expanded"/>
                </form>
             </div>
        );
    }
});

module.exports = CountdownForm;
