import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.Home}>
                <Text>Home</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})