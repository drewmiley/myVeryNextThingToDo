import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
