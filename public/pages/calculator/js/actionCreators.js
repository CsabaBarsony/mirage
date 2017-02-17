'use strict';

(function(actions) {
    const actionCreators = {
        buttonClick: function(text) {
            return {
                type: actions.BUTTONCLICK,
                text
            };
        }
    };

    window.actionCreators = actionCreators;
}(actions));
