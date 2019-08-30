import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

//图标
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.Home}>
                <Text>Home</Text>
                <Feather name='feather' size={25} color='#10aeff'/>
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