import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import DummyDisplay from '../components/DummyDisplay';
import ItemList from '../components/ItemList';
import Screens from '../constants/Screens';
import { mapDispatchToProps } from '../ducks/actions';
import baseStyles from '../styles/base';

type Props = {};
class Home extends Component<Props> {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <DummyDisplay />
                <Button
                    title="Go to Dummy"
                    onPress={() => this.props.navigation.navigate(Screens.DUMMY)}
                />
                <ItemList
                    items={this.props.items}
                    hasErrored={this.props.hasErrored}
                    isLoading={this.props.isLoading}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create(baseStyles);

export default connect(state => state, mapDispatchToProps)(Home);
