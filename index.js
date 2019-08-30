/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Active from './component/Active/Active';
import Home from './component/Home/Home';
import User from './component/User/User';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
