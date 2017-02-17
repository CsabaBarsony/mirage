'use strict';
/* global Redux, reducers, actionCreators */

document.addEventListener("DOMContentLoaded", function() {
    const store = Redux.createStore(reducers);

    document.querySelector('#button').addEventListener('click', function(e) {
        store.dispatch(actionCreators.buttonClick('majom vagy'));
    });

    ReactDOM.render(React.createElement(cmp.sugar.Sugar, null), document.getElementById('cmp-sugar'));
});
