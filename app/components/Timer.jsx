const React = require('react');
const Clock = require('Clock');

const Timer = () => {
    return (
        <div>            
            <Clock totalSeconds={62}/>
         </div>
    );
};

module.exports = Timer;
