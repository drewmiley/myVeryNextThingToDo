import {List, Map} from 'immutable';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './containers/App';

// import reducer from './ducks/reducers';

// const store = createStore(reducer);

// store.dispatch({
//     type: actions.SET_STATE,
//     state: {}
// });

export default class myVeryNextThingToDo extends Component {
    render() {
        // return <Provider store={store}>
        //     <AppContainer />
        // </Provider>
		return <App />
    };
};
