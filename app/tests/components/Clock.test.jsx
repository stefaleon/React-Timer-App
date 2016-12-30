const React =  require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    })

    describe('formatSeconds', () => {
        it('should format seconds', () => {
            var clock = TestUtils.renderIntoDocument(<Clock />);
            var seconds = 613;
            var expected = '10:13';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        })
    });

    describe('formatSeconds', () => {
        it('should format seconds for min or sec < 10', () => {
            var clock = TestUtils.renderIntoDocument(<Clock />);
            var seconds = 188;
            var expected = '03:08';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        })
    });
});
