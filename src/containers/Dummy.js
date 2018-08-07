import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import Screens from '../constants/Screens';

export default class Dummy extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Dummy Screen</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate(Screens.HOME)}
                />
            </View>
        );
    }
}
