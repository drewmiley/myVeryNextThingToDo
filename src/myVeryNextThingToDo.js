import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

import Screens from './constants/Screens';
import Dummy from './containers/Dummy';
import Home from './containers/Home';
import store from './ducks/store';

let screens = {};
screens[Screens.HOME] = { screen: Home };
screens[Screens.DUMMY] = { screen: Dummy };

const App = createStackNavigator(screens, {
    initialRouteName: Screens.HOME,
});

export default class myVeryNextThingToDo extends Component {
    render() {
        return <Provider store={ store() }>
            <App />
        </Provider>
    };
};
