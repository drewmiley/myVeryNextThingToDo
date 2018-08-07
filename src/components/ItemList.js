import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {}
export default class ItemList extends Component<Props> {
    render() {
        if (this.props.hasErrored) {
            return <View><Text>Sorry! There was an error loading the items</Text></View>;
        }
        if (this.props.isLoading) {
            return <View><Text>Loading…</Text></View>;
        }
        return (
            <View style={styles.container}>
                <Text>{ this.props.items.length }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
