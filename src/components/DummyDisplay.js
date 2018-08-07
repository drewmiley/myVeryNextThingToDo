import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import baseStyles from '../styles/base';

const hello = Platform.select({
  ios: 'IOS',
  android: 'ANDROID'
});

type Props = {};
export default class DummyDisplay extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>{ hello }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create(baseStyles);
