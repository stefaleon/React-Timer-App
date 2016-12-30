const React = require('react');
const Nav = require('Nav');

const Main = (props) => {
    return (
        <div>
            <Nav />
            <div className="row">
                <p>This is main</p>
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                 </div>
            </div>
        </div>
    );
};

module.exports = Main;