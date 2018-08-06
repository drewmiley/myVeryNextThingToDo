import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

import Dummy from './containers/Dummy';
import Home from './containers/Home';
import store from './ducks/store';

const App = createStackNavigator({
  Home: {
    screen: Home
  },
  Dummy: {
    screen: Dummy
  }
}, {
  initialRouteName: 'Home',
});

export default class myVeryNextThingToDo extends Component {
    render() {
        return <Provider store={store()}>
            <App />
        </Provider>
    };
};
