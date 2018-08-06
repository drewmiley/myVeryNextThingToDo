import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View} from 'react-native';
import { connect } from 'react-redux';

import DummyDisplay from '../components/DummyDisplay';
import ItemList from '../components/ItemList';
import { mapDispatchToProps } from '../ducks/actions';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class Home extends Component<Props> {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Readct Native!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          title="Go to Dummy"
          onPress={() => this.props.navigation.navigate('Dummy')}
        />
        <DummyDisplay />
        <ItemList
            items={this.props.items}
            hasErrored={this.props.hasErrored}
            isLoading={this.props.isLoading}
        />
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(state => state, mapDispatchToProps)(Home);