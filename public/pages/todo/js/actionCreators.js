'use strict';

window.actionCreators = {
    addTodo: function(text) {
        return {
            type: actions.ADD_TODO,
            text
        };
    },
    toggleTodo: function(index) {
        return {
            type: actions.TOGGLE_TODO,
            index
        };
    },
    setVisibilityFilter(filter) {
        return {
            type: actions.SET_VISIBILITY_FILTER,
            filter
        };
    }
};
