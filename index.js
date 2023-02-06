import { AppRegistry } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';
import './polifyll';

const HeadlessCheck = ({ isHeadless }) => isHeadless ? null : <App />;

AppRegistry.registerComponent(appName, () => HeadlessCheck);
