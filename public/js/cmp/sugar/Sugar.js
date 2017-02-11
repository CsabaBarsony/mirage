'use strict';

(function(global, React) {
    const Sugar = React.createClass({
        render: function() {
            return React.createElement('div', null, 'Hello Sugar!');
        }
    });

    if(global.cmp) {
        global.cmp.sugar = {
            Sugar: Sugar
        };
    }
    else {
        global.cmp = {
            sugar: {
                Sugar: Sugar
            }
        };
    }
}(window, React));
