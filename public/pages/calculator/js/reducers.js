'use strict';

(function(actions, actionCreators) {
    const initialState = {
        text: 'init'
    };

    function reducers(state = initialState, action) {
        switch (action.type) {
            case actions.BUTTONCLICK:
                return Object.assign({}, state, { text: newText });
            default:
                return state;
        }
    }

    window.reducers = reducers;
}(actions, actionCreators));
