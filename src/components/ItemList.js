import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import baseStyles from '../styles/base';

type Props = {}
export default class ItemList extends Component<Props> {
    render() {
        if (this.props.hasErrored) {
            return <View><Text style={styles.simpleText}>Sorry! There was an error loading the items</Text></View>;
        }
        if (this.props.isLoading) {
            return <View><Text style={styles.simpleText}>Loading…</Text></View>;
        }
        return (
            <View style={styles.container}>
                <Text style={styles.simpleText}>{ this.props.items.length }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create(baseStyles);
