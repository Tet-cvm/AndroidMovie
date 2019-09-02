import React from 'react';
import { AppRegistry } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//图标
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//组件
import Active from './component/Active/Active';
import Home from './component/Home/Home';
import User from './component/User/User';
import {name as appName} from './app.json';

const TabScreen = createBottomTabNavigator({
  Active: Active,
  Home: Home,
  User: User,
}, {
  navigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      if (routeName === 'Active') {
        return <Feather name='feather' size={25} color={tintColor}/>;
      } else if (routeName === 'Home') {
        return <AntDesign name='staro' size={25} color={tintColor}/>;
      } else if (routeName === 'User') {
        return <FontAwesome name='user-o' size={25} color={tintColor}/>;
      }
    },
  }),
  initialRouteName: 'Home', //初次加载组件
  tabBarOptions: {
    activeTintColor: '#10aeff',
    inactiveTintColor: '#999999',
    showIcon: true,
    labelStyle: {
      fontSize: 12,
      marginTop: 0,
      marginBottom: 0,
    },
    style: {
      backgroundColor: '#FCFCFC',
      paddingBottom: 1
    },
    tabStyle: {
    }
  },
});

const MyApp = createAppContainer(TabScreen);

AppRegistry.registerComponent(appName, () => MyApp);
