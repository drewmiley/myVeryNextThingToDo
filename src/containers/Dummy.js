import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import Realm from 'realm';

import Screens from '../constants/Screens';

export default class Dummy extends Component {
    constructor(props) {
        super(props);
        this.state = { realm: null };
    }

    componentWillMount() {
        Realm.open({
            schema: [{ name: 'Dog', properties: { name: 'string' } }]
        }).then(realm => {
            realm.write(() => {
                const allDogs = realm.objects('Dog');
                realm.delete(allDogs);
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
