const React =  require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should start timer on started status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.handleStatusChange('started');
        expect(timer.state.count).toBe(0);

        setTimeout(() => {
            expect(timer.state.count).toBe(2);
            expect(timer.state.countdownStatus).toBe('started');
            done();
        }, 2001);
    });

    it('should pause timer on paused status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.setState({count: 42});
        timer.handleStatusChange('started');
        timer.handleStatusChange('paused');
        expect(timer.state.count).toBe(42);

        setTimeout(() => {
            expect(timer.state.count).toBe(42);
            expect(timer.state.countdownStatus).toBe('paused');
            done();
        }, 1001);
    });

    it('should clear count on stopped status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.setState({count: 42});
        timer.handleStatusChange('started');
        expect(timer.state.count).toBe(42);
        timer.handleStatusChange('stopped');
        expect(timer.state.count).toBe(0);

        setTimeout(() => {
            expect(timer.state.count).toBe(0);
            expect(timer.state.countdownStatus).toBe('stopped');
            done();
        }, 1001);
    });


});
