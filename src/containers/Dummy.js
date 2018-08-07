import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import Screens from '../constants/Screens';
import dogDB from '../ducks/db';

export default class Dummy extends Component {
    constructor(props) {
        super(props);
        this.state = { realm: null };
    }

    componentWillMount() {
        dogDB(realm => {
            realm.write(() => {
                realm.create('Dog', { name: 'Rex' });
            });
            this.setState({ realm });
        });
    }

    render() {
        const info = this.state.realm
            ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
            : 'Loading...';

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Dummy Screen</Text>
                <Text>{ info }</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate(Screens.HOME)}
                />
            </View>
        );
    }
}
