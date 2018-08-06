import React, { Component } from 'react';
import { Provider } from 'react-redux';

import App from './containers/App';
import store from './ducks/store';

export default class myVeryNextThingToDo extends Component {
    render() {
        return <Provider store={store()}>
            <App />
        </Provider>
    };
};
